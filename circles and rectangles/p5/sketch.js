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
  if (mouseX < width/2) {
      fill(random(255));
      rect(random(width), random(height), random(20), random(45));
   }

   else {
     fill(random(255),random(255),random(255));
     ellipse(random(width),random(width),random(30));
   }
}
