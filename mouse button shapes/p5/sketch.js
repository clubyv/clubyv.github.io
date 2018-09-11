// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {
    if (mouseButton === LEFT){
      rect(mouseX,mouseY,40,10);
    }
    if (mouseButton === RIGHT){
      ellipse(mouseX, mouseY, 20);
    }
    if (keyCode === 87 //w) {
     	background(255);
    }
    if (keyCode === 66 //b) {
     	background(0);
    }
}
