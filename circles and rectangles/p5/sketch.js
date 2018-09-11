// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseX > windowWidth/2) {
      fill(random(10, 245));
      rect(random(windowWidth/2, windowWidth), random(0, windowHeight), 10, 30);
   }

   if (mouseX < windowWidth/2) {
     fill(random(0,255),random(0,255),random(0,255));
     ellipse(random(0,windowWidth/2),random(0,windowHeight),15);
   }
}
