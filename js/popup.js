// load URL of logo image
chrome.extension.getURL('/assets/reclogoa.png');

let display; //timer display
let isOn; //true or false

// check if extension on or off
chrome.storage.local.get(['on'], function (result) {
	if (result.on != null) {
		if (!result.on) {
			document.getElementById('checkbox1').checked = false; //off
			isOn = false;
			display.textContent = 'turn on';
			updateDisplay();
		} else {
			document.getElementById('checkbox1').checked = true; //on
			isOn = true;
		}
	} else {
		//on auto on first launch
		chrome.storage.local.set({ on: true }, function () {
			// console.log('On set to true.');
		});
		document.getElementById('checkbox1').checked = true;
		isOn = true;
	}
});

// update on or off preference when clicked
document.getElementById('checkbox1').onclick = function () {
	if (document.getElementById('checkbox1').checked === false) {
		chrome.storage.local.set({ on: false }, function () {
			// console.log('On set to false.');
		});
		isOn = false;
		display.textContent = 'turn on';
		updateDisplay();
	} else {
		// currently says off
		chrome.storage.local.set({ on: true }, function () {
			// console.log('On set to true.');
		});
		isOn = true;
	}
};

// listens for changes in timeLeft var from background.js timer & update display on inferface
chrome.storage.onChanged.addListener(function (changes, namespace) {
	for (let key in changes) {
		if (key === 'TIME_LEFT') {
			//store all changes
			let storageChange = changes[key];
			time = storageChange.newValue;
			if (isOn) {
				if (time > 1500) {
					//60, 1500
					display.textContent = 'stretch';
					updateDisplay();
				} else if (time <= 1500) {
					//60, 1500
					// convert newValue to time & seconds display
					let minutes = Math.floor(time / 60);
					let seconds = time % 60;
					// pretty-print the time
					function str_pad_left(string, pad, length) {
						return (new Array(length + 1).join(pad) + string).slice(-length);
					}
					let finalTime =
						str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
					//set display to new updated time
					display.textContent = finalTime;
					updateDisplay();
				}
			} else {
				display.textContent = 'turn on';
				updateDisplay();
			}

			//printing changes in console
			// console.log(
			// 	'Storage key "%s" in namespace "%s" changed. ' +
			// 		'Old value was "%s", new value is "%s".',
			// 	key,
			// 	namespace,
			// 	storageChange.oldValue,
			// 	storageChange.newValue
			// );
		}
	}
});

//when user opens extension, update display
window.onload = function () {
	updateDisplay();
};

function updateDisplay() {
	display = document.querySelector('#time');
}
