// Hello World
// Parker Rogal
// 9/7/2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {
  let mouseSpeed = Math.abs(mouseY-pmouseY);
  background(255);
  fill(0);
  strokeWeight(mouseSpeed);
  line(500,500,1000,500);
}
