// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 100
  dx = 3.5
  y = windowHeight;
  dy = dx*2;
}

let x;
let dx;
let y;
let dy;
let circleWidth;

function draw() {
  background(255)

  x += dx;
  y += dy;
  circleWidth = 50;

  if (x > width - circleWidth || x < 0){
    dx = dx * -1;
  }

  if (y < windowHeight/2 || y > windowHeight){
    dy = dy * -1
  }

  fill(255,0,0);
  ellipse(x, y, circleWidth);
}
