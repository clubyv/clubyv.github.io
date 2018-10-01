// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let steve;
let scalar;

function preload(){
  steve = loadImage('assets/steve.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  scalar = 1.0;
}

function draw() {
  background(255);
  moveImage();
}

function moveImage() {
  image(steve,mouseX,mouseY, steve.width * scalar, steve.height * scalar);
}

function mouseWheel(event) {
  if (event.delta > 0 && scalar < 3){
    scalar *= 1.1;
  }
  if (event.delta < 0 && scalar > .1){
    scalar *= 0.9;
  }
}
