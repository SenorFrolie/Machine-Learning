/** 
 * IDEAS to further make this my own project
 *  - allow the user to drag and drop an image 
 *  - Allow the user to draw and have ML5 predict what you are 
 *    drawing.
 */


let mobilent;

let puffin;

function modelReady() {
    console.log("Model is ready ");
    mobilent.classify   (puffin,gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      // className and probability have been renamed to
      // label and confidence
      let label = results[0].label;
      let prob = results[0].confidence;
      fill(0);
      textSize(64);
      text(label, 10, height - 100);
      createP(prob)
    }
  }
function imageReady(){
    image(puffin,0,0,width,height);
}

function setup(){
    createCanvas(640,480);
    background(0);
    puffin = createCapture("images/puffin.jpeg",imageReady)
    puffin.hide()
    

    mobilent = ml5.imageClassifier('MobileNet',modelReady);

}