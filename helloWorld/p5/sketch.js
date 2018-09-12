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
  let mouseSpeed = abs(mouseX-pmouseX);
  fill(random(1,255),random(1,255),random(1,255));
  strokeWeight(mouseSpeed);
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function keyTyped(){
  if(keyCode === 67){
    background(255);
  }
}
