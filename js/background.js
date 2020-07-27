let freq;

// when open chrome browser, start alarm at 25 min
freq = 25;
createAlarm(freq);
let timeLeft; //in min

function createAlarm(freq) {
	// start the background timer
	startBackgroundTimer();

	// clears past notif alarms on chrome
	chrome.alarms.clearAll();

	// creates a new notif alarm
	chrome.alarms.create('alarmStart', {
		when: Date().now,
		periodInMinutes: freq,
	});

	// add in 5 min break
	freq = 30;
}

function openNotification() {
	var popupUrl = chrome.runtime.getURL('/notification.html');
	chrome.tabs.query({ url: popupUrl }, function (tabs) {
		if (tabs.length > 0) {
			// remove last exercise tab if haven't closed
			chrome.tabs.remove(tabs[0].id);
		}
		// creates a new notif popup window
		chrome.windows.create({
			url: 'notification.html',
			type: 'popup',
			width: 1150,
			height: 720,
			top: 20,
			left: 20,
		});
	});
}

// listen for alarm and open the notif popup if extension is enabled
chrome.alarms.onAlarm.addListener(function (alarm) {
	//************always open for now, need to implement the on/off button fcn here & in popup.js
	openNotification();
});

// Start a background timer seperate from the chrome alarm
function startBackgroundTimer() {
	let timeLeft = 1500; //in secs
	console.log('Starting timer at ' + timeLeft + ' minutes.');
	chrome.storage.local.set({ TIME_LEFT: timeLeft }, function () {
		console.log('timeLeft is saved: ' + timeLeft + ' min');
	});

	const interval = 1000; //decreasing interval is every sec
	let endTime = Date.now() + interval; //next endTime is 1 min from now

	// after one min, execute step() fcn
	setTimeout(step, interval);

	function step() {
		//************if disabled, return fcn

		// how much time has passed
		let dt = Date.now() - endTime;

		// if time passed > 1 min, javascript not running accurately with time
		if (dt > interval) {
			console.log('Timer is not accurate due to javascript runtime.');
		}

		//decrease the time left by 1 min
		timeLeft--;
		console.log(timeLeft);

		// save the new timeLeft to local storage (in user chrome browser)
		chrome.storage.local.set({ TIME_LEFT: timeLeft }, function () {
			console.log('timeLeft is saved: ' + timeLeft + 'min');
		});

		//increase the endTime by 1 more min
		endTime += interval;

		//after one min, execute step() fcn to decrease timeLeft again
		setTimeout(step, Math.max(0, interval - dt));

		if (timeLeft <= 0) {
			//resets timer, with 5 extra minute for stretch
			timeLeft = 1800;
		}
	}
}
