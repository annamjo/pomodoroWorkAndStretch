/* ON GLITCH NOTIF PAGE: BACKUP & DELETE AT END */

// let images = [];
// let label = document.querySelector('#label');
// let stretch = document.querySelector('#stretch');
// let stretchdata;
// var random;

// function startTimer(duration, display) {
// 	let timer = duration;
// 	let minutes;
// 	let seconds;
// 	let key = 1;
// 	let nextMinute = 4;

// 	// this only works if the window is open
// 	setInterval(function () {
// 		// converts to minute & seconds int in main number system (10)
// 		minutes = parseInt(timer / 60, 10);
// 		seconds = parseInt(timer % 60, 10);

// 		//add 0 styling
// 		minutes = minutes < 10 ? '0' + minutes : minutes;
// 		seconds = seconds < 10 ? '0' + seconds : seconds;

// 		// set display for html
// 		display.textContent = minutes + ':' + seconds;
// 		// if done, reset
// 		if (--timer < 0) {
// 			timer = 0;
// 		}
// 		if (timer > 0 && minutes == nextMinute && seconds == 0) {
// 			//set subsequent labels/urls
// 			setImage(key);
// 			console.log('key:' + key + ' ' + 'min:' + nextMinute);
// 			key++;
// 			nextMinute--;
// 		}
// 	}, 1000);
// }

// window.onload = function () {
// 	let fiveMinute = 60 * 5,
// 		display = document.querySelector('#timer'); //added this 'timer' id on notification.html
// 	startTimer(fiveMinute, display);
// };

// let requestURL =
// 	'https://raw.githubusercontent.com/trannble/pomodoroWorkAndStretch/master/stretchdata.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json'; //'text'
// request.send();

// request.onload = function () {
// 	// const stretchtext = request.response; //contains JS object based on JSON
// 	// console.log(stretchtext);
// 	const stretchdata = request.response;
// 	// stretchdata = JSON.parse(stretchtext);
// 	// console.log(stretchdata[14]["name"]);

// 	// for (var key in images) {
// 	// if(images.hasOwnProperty(key)){
// 	// console.log('key:' + key + ' ' + images[key]["name"]);
// 	// }
// 	//}
// 	images = pickStretches(stretchdata);
// 	// console.log(images)
// 	//set 1st label & image url upon load
// 	setImage(0);
// };

// function setImage(key) {
// 	// console.log(images[key])
// 	label.textContent = images[key].name;
// 	// console.log(images[key].url)
// 	stretch.src = images[key].url;
// }

// function randomNums(max) {
// 	var arr = [];
// 	while (arr.length < 5) {
// 		var r = Math.floor(Math.random() * max);
// 		if (arr.indexOf(r) === -1) {
// 			arr.push(r); //if index doesnt exist == -1
// 		}
// 	}
// 	return arr;
// }

// function pickStretches(stretchdata) {
// 	var maxStretches = stretchdata.length;
// 	var images = [];
// 	var indexes = randomNums(maxStretches);
// 	for (var i = 0; i < indexes.length; i++) {
// 		images.push(stretchdata[indexes[i]]);
// 	}
// 	// console.log(images);
// 	return images;
// }
