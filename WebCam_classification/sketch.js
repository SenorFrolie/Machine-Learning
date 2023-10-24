/** 
 * IDEAS to further make this my own project
 *  - allow the user to drag and drop an image 
 *  - Allow the user to draw and have ML5 predict what you are 
 *    drawing.
 */


let mobilent;
let video;
let label = ''
function modelReady() {
    console.log("Model is ready ");
    mobilent.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      // className and probability have been renamed to
      // label and confidence
      label = results[0].label;
      //let prob = results[0].confidence;
      //createP(prob)
      mobilent.classify(gotResults);

    }
  }

function setup(){
    createCanvas(640,550);
    background(0);

    video = createCapture(VIDEO)
    video.hide();
    

    mobilent = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw(){
  background(0);
  image(video,0,0)
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}