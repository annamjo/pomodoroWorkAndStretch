let display;

// listens for changes in timeLeft var from background.js timer & changes timer on extension
chrome.storage.onChanged.addListener(function (changes, namespace) {
	for (let key in changes) {
		//store all changes
		let storageChange = changes[key];
		time = storageChange.newValue;
		if (time > 1500) {
			display.textContent = 'Break and stretch time!';
		} else if (time <= 1500) {
			// convert newValue to time & seconds display
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;
			// pretty-print the time
			function str_pad_left(string, pad, length) {
				return (new Array(length + 1).join(pad) + string).slice(-length);
			}
			var finalTime =
				str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
			//set display to new updated time
			display.textContent = finalTime;
		} else {
			display.textContent = 'Please turn on the extension.';
		}

		//printing changes in console
		console.log(
			'Storage key "%s" in namespace "%s" changed. ' +
				'Old value was "%s", new value is "%s".',
			key,
			namespace,
			storageChange.oldValue,
			storageChange.newValue
		);
	}
});

//when user opens extension, shows how much time left (by minutes)
window.onload = function () {
	display = document.querySelector('#time');
};
