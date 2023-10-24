
let img;
let confidence

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

        // loop to draw a border box around the subject
        for(let i = 0; i < results.length; i++){
            let object = results[i] // grab the results
            //let prob = results[0].confidence
            stroke(0,255,0) //color of box
            strokeWeight(4) 
            noFill();
            rect(object.x, object.y, object.width, object.height,)//draw the box
            noStroke();
            fill(255);
            textSize(24);
            text(object.label, object.x + 10, object.y + 24)
            //createP(prob)
        }

    }
    
}

function setup(){
    createCanvas(640,480);
    image(img,0,0)
    detector.detect(img,gotDetections);
}

