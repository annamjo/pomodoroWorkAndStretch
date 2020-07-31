/* pose classification using TensorFlow's PoseNet vision model and ml5's neural network */
/* global ml5, createCanvas, width, height, createCapture, VIDEO, background, image, key, line, stroke, strokeWeight, noStroke, ellipse, fill, dist, scale, translate, setFrameRate */
// import { images } from './script.js'

let posenet;
let webcam;
let pose;
let skeleton;
let stretchMachine; //obj to store neural network
let state = 'waiting';
let targetLabel;
let keypts;

function setup() {
  let c = createCanvas(500, 500);
  c.position(8.75 * width / 10, height / 8);
  c.style('border-radius: 6px')

  webcam = createCapture(VIDEO);
  webcam.hide();
  posenet = ml5.poseNet(webcam, modelLoaded);
  posenet.on('pose', gotPoses);

  let options = {
    inputs: 30, //17 xy pairs of nums - keypoints -> 17-2=15*2=30, remove 2 keypts (ankles)
    outputs: 39, //classify 34 nums into 1 of 15 stretch types
    task: 'classification',
    debug: true //to see debugging as your training model
  }
  stretchMachine = ml5.neuralNetwork(options); //can include a data url (ml5 docpg)
  //   stretchMachine.loadData('https://raw.githubusercontent.com/trannble/pomodoroWorkAndStretch/master/stretchmachinedataset.json', dataReady);
  const modelInfo = {
    model: '/model.json', //https://raw.githubusercontent.com/trannble/pomodoroWorkAndStretch/master/model/model.json
    metadata: '/model_meta.json', //https://raw.githubusercontent.com/trannble/pomodoroWorkAndStretch/master/model/model_meta.json', //must be url??
    weights: 'https://cdn.glitch.com/59269d86-cffb-44f7-90ed-68aa09d20734%2Fmodel.weights.bin?v=1596153711650' //https://github.com/trannble/pomodoroWorkAndStretch/blob/master/model/model.weights.bin?raw=true
  };
  //after loading data and .train(), can now load trained model
  stretchMachine.load(modelInfo, machineLoaded); //pass in obj that store all three file names of training model
}

function machineLoaded() {
  // console.log('pose classification ready')
  classifyPose();
}

function classifyPose() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < keypts; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y
      inputs.push(x);
      inputs.push(y);
    }
    stretchMachine.classify(inputs, gotResult);
  } else {
      setTimeout(classifyPose, 100);
  }
}

//callback
function gotResult(error, results) {
  var imagekey = localStorage.getItem("imagekey");
  console.log(imagekey)
  switch(imagekey) {
    case "1":
      
      break;
    case "2":
      
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      
      break;
    case "7":
      break;
    case "8":
      break;
    case "9":
      break;
    case "10":
      
      break;
    case "11":
      break;
    case "12":
      break;
    case "13":
      break;
    case "14":
      break;
    case "15":
      break;
  }
  // if (results[0].label == "Shift") {
    // console.log(results[0].confidence);
  // }
  // if (results[0].confidence > 0.4) {
    // console.log(results[0].label);
    // console.log(results[0].confidence/0.81);
  // }

  classifyPose(); ///recursive loop, to detect pose

}

function modelReady() {
  console.log('model ready!')
}

// function dataReady() {
//   console.log('model about to train')
//   //normalize - do NOT forget!! very important to start train 
//   //and see training performance visual
//   stretchMachine.normalizeData();
//   stretchMachine.train({
//     epochs: 100
//   }, finished); //or 50 epochs
// }

// function finished() {
//   console.log('model trained');
//   stretchMachine.save();
// }

function gotPoses(poses) {
  // console.log(poses)
  //object array in poses has 2 props: pose + skeleton
  if (poses.length > 0) {
    pose = poses[0].pose; //taking any pose they give me
    skeleton = poses[0].skeleton;
    keypts = pose.keypoints.length - 2; //15

    if (state == 'collecting') {
      let inputs = [];
      for (let i = 0; i < keypts; i++) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y
        inputs.push(x);
        inputs.push(y);
      }
      let target = [targetLabel];
      console.log(inputs);
      stretchMachine.addData(inputs, target); //inputs - all xy pos of keypts
    }
    //ignore some keypts (cuz camera can't see legs), use pts above hip
    //use confidence score - if low (ignore keypt)
  }
}

function modelLoaded() {
  //callback for when model is loaded
  console.log("posenet ready")
}

function draw() {
  background('#cccccc');
  translate(webcam.width, 0);
  scale(-1, 1);
  image(webcam, 0, 0, 640, 500);

  //(typeof pose !== "undefined") works too
  if (pose) { //is there a valid pose? is it defined?
    // console.log(pose)

    //check dist fr cam by calc how far apart eyes are
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);

    // //can loop all keypts (arr.len = 17)
    for (let i = 0; i < pose.keypoints.length; i++) { //-2 for ommitting last 2 els (ankles)
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y
      noStroke();
      fill('#95e1d3');
      ellipse(x, y, 13);
    }

    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(3);
      stroke('#95e1d3');
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
    if (typeof (pose.keypoints[5]) != undefined && typeof (pose.keypoints[6]) != undefined) {
      line(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y);
    }
    noStroke();
  }
}