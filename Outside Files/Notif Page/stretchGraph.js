let label = "Form Score";
let bars = {};
let graphWrapper;

// This function makes the bar graph
// it takes in a URL to a teachable machine model,
// so we can retrieve the labels of our classes for the bars (current set to Form Score)
export async function setupBarGraph(URL) {
  // get the area of the webpage we want to build the bar graph
  graphWrapper = document.getElementById("graph-wrapper");
  // make a bar in the graph for each label in the metadata
  makeBar(label, 0);
}

// This function makes a bar in the graph
function makeBar(label, index) {
  // make the elements of the bar
  let barWrapper = document.createElement("div");
  let barEl = document.createElement("progress");
  let percentEl = document.createElement("span");
  let labelEl = document.createElement("span");
  labelEl.innerText = label;

  // assemble the elements
  barWrapper.appendChild(labelEl);
  barWrapper.appendChild(barEl);
  barWrapper.appendChild(percentEl);
  let graphWrapper = document.getElementById("graph-wrapper");
  graphWrapper.appendChild(barWrapper);

  // style the elements
  let color = "#f38181";
  let lightColor = "#fce38a";
  barWrapper.style.color = color;
  barWrapper.style.setProperty("--color", color);
  barWrapper.style.setProperty("--color-light", lightColor);

  // save references to each element, so we can update them later
  bars[label] = {
    bar: barEl,
    percent: percentEl
  };
}

// This function takes data (retrieved in the model-runner.js file)
// The data is in the form of an array of objects like this:
// [{ className:class1, probability:0.75 }, { className:class2, probability:0.25 }, ... ]
export function updateBarGraph(data) {
  
  //for checking the highest probability in each subsection of classes
  let largestProbability = 0;
  var imagekey = localStorage.getItem("imagekey");
  console.log(imagekey)
  console.log(data)
  switch(imagekey) {
    case "1":
      //1 is key for extended arms stretch
      // indices.push(0); //unnecessary, only connected to 1 class
      console.log(data[0].className)
      largestProbability = data[0].probability.toFixed(2);
      console.log(largestProbability)
      break;
    case "2":
      console.log(data[1].className + ' ' + data[4].className)
      // largestProbability = data[1].probability.toFixed(2);
      // largestProbability = findGreaterProbability();
      // console.log(data[1].className)
      largestProbability = Math.max(data[1].probability.toFixed(2), data[2].probability.toFixed(2), data[3].probability.toFixed(2), data[4].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "3":
      // largestProbability = data[5].probability.toFixed(2);
      console.log(data[5].className + ' ' + data[6].className)
      largestProbability = Math.max(data[5].probability.toFixed(2), data[6].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "4":
      console.log(data[7].className + ' ' + data[9].className)
      // largestProbability = data[7].probability.toFixed(2);
      largestProbability = Math.max(data[7].probability.toFixed(2), data[8].probability.toFixed(2), data[9].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "5":
      console.log(data[10].className)
      largestProbability = data[10].probability.toFixed(2);
      console.log(largestProbability)
      break;
    case "6":
      console.log(data[11].className + ' ' + data[12].className)
      // largestProbability = data[11].probability.toFixed(2);
      largestProbability = Math.max(data[11].probability.toFixed(2), data[12].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "7":
      console.log(data[13].className + ' ' + data[14].className)
      // largestProbability = data[13].probability.toFixed(2);
      largestProbability = Math.max(data[13].probability.toFixed(2), data[14].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "8":
      console.log(data[15].className + ' ' + data[24].className)
      // largestProbability = data[15].probability.toFixed(2);
      largestProbability = Math.max(data[15].probability.toFixed(2), data[24].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "9":
      console.log(data[16].className + ' ' + data[19].className)
      // largestProbability = data[16].probability.toFixed(2);
      largestProbability = Math.max(data[16].probability.toFixed(2), data[17].probability.toFixed(2), data[18].probability.toFixed(2), data[19].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "10":
      console.log(data[20].className + ' ' + data[23].className)
      // largestProbability = data[20].probability.toFixed(2);
      largestProbability = largestProbability = Math.max(data[20].probability.toFixed(2), data[21].probability.toFixed(2), data[22].probability.toFixed(2), data[23].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "11":
      console.log(data[25].className + ' ' + data[27].className)
      // largestProbability = data[25].probability.toFixed(2);
      largestProbability = Math.max(data[25].probability.toFixed(2), data[26].probability.toFixed(2), data[27].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "12":
      console.log(data[28].className + ' ' + data[29].className)
      // largestProbability = data[28].probability.toFixed(2);
      largestProbability = Math.max(data[28].probability.toFixed(2), data[29].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "13":
      console.log(data[30].className + ' ' + data[31].className)
      // largestProbability = data[30].probability.toFixed(2);
      largestProbability = Math.max(data[11].probability.toFixed(2));//data[31].probability.toFixed(2)); //data[30].probability.toFixed(2) doesnt work well
      console.log(largestProbability)
      break;
    case "14":
      console.log(data[32].className + ' ' + data[33].className)
      // largestProbability = data[32].probability.toFixed(2);
      largestProbability = Math.max(data[32].probability.toFixed(2), data[33].probability.toFixed(2));
      console.log(largestProbability)
      break;
    case "15":
      console.log(data[34].className + ' ' + data[35].className)
      // largestProbability = data[34].probability.toFixed(2);
      largestProbability = Math.max(data[34].probability.toFixed(2), data[35].probability.toFixed(2));
      console.log(largestProbability)
      break;
  }
  
  // get the HTML elements that we stored in the makeBar function
  let barElements = bars[label];
  let barElement = barElements.bar;
  let percentElement = barElements.percent;
  // set the progress on the bar
  barElement.value = largestProbability;
  // set the percent value on the label
  percentElement.innerText = convertToPercent(largestProbability);
}

// This function converts a decimal number (between 0 and 1)
// to an integer percent (between 0% and 100%)
function convertToPercent(num) {
  num *= 100;
  num = Math.round(num);
  return `${num}%`;
}