
let video;
let confidence
let detections = []
function preload(){
    img = loadImage('images/puffin.jpeg')
    detector = ml5.objectDetector('cocossd');

}
function gotDetections(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        detections = results;

        detector.detect(video,gotDetections);

    }
    
}

function setup(){
    createCanvas(640,480);
    video = createCapture(VIDEO)
    video.size(640,480);
    video.hide();
    detector.detect(video,gotDetections);
}

function draw(){
    image(video,0,0);
            // loop to draw a border box around the subject
    for(let i = 0; i < detections.length; i++){
        let object = detections[i] // grab the results
        //let prob = results[0].confidence
        stroke(0,255,0) //color of box
        strokeWeight(4) 
        noFill();
        rect(object.x, object.y, object.width, object.height,)//draw the box
        noStroke();
        fill(255);
        textSize(24);
        text(object.label, object.x + 10, object.y + 24)
    }
}

