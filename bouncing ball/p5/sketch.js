// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
}

let startX = 20
let startY = 400
let ellipseX = ellipseX + dx
let ellipseY = ellipseY + dy
let dx = 5
let dy = 8

function draw() {
  background(255)
  ellipse(startX, startY, 30);
  while (ellipseX < windowWidth - 30 || ellipseX > 0) {
    ellipseX += dx;
    ellipseY += dy;
    if (ellipseY > )
  }
}
