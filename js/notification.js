// This code will work for the pop-up 5 minute feature on notification

function startTimer(duration, display) {
	let timer = duration;
	let minutes;
	let seconds;

	// this only works if the window is open
	setInterval(function () {
		// converts to minute & seconds int in main number system (10)
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		//add 0 styling
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;

		// set display for html
		display.textContent = minutes + ':' + seconds;

		// if done, reset
		if (--timer < 0) {
			timer = duration;
		}
	}, 1000);
}

window.onload = function () {
	const fiveMinute = 60 * 5,
		display = document.querySelector('#timer'); //!!!need to add this id on notification.html
	startTimer(fiveMinute, display);
};
