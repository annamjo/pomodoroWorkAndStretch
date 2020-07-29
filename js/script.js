//*********************NOTIFICATION PAGE*********************

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
			timer = 0;
		}
	}, 1000);
}

window.onload = function () {
	let fiveMinute = 60 * 5,
	display = document.querySelector('#timer'); //added this 'timer' id on notification.html
	startTimer(fiveMinute, display);
};



//*********************TEACHABLE MACHINE CODE IN NOTIFICATION PAGE*********************



//*********************OLD TEACHABLE MACHINE CODE WITH P5*********************

// // Teachable Machine
// // The Coding Train / Daniel Shiffman
// // https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// // https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// // The video
// let video;
// // For displaying the label
// let label = "check your form...";
// // The classifier
// let classifier;
// let modelURL = 'https://storage.googleapis.com/tm-models/YadBJmj5/';

// // STEP 1: Load the model!
// function preload() {
//   classifier = ml5.imageClassifier(modelURL + 'model.json');
// }

// function setup() {
//   let c = createCanvas(640, 520);
//   c.position(8.75*width/10, height/8);
//   // Create the video
//   video = createCapture(VIDEO);
//   video.hide();
// }


// function draw() {
//   background(0);

//   // Draw the video
//   image(video, 0, 0);

//   // STEP 4: Draw the label
//   textSize(32);
//   textAlign(CENTER, CENTER);
//   fill(255);
//   text(label, width / 2, height - 16);

// }