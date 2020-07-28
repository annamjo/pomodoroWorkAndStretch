//used in glitch for webcam and model training

let video;
let label = "check your form...";
let classifier;
let modelURL = 'https://storage.googleapis.com/tm-models/YadBJmj5/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  let c = createCanvas(640, 520);
  c.position(8.75*width/10, height/8);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
}


function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

}

window.onload = function () {
	let fiveMinute = 60 * 5,
	display = document.querySelector('#timer'); //added this 'timer' id on notification.html
	// startTimer(fiveMinute, display);
};