function setup() {
  createCanvas(400, 400);
  background(255);
}

let rectHeight = 6;
let rectWidth = 3;
let ellipseWidth = 5;

function draw() {
if (mouseIsPressed) {
  if (keyIsDown(69)) {
    ellipse(mouseX,mouseY,ellipseWidth,ellipseWidth);
  }
  if (keyIsDown(82)) {
    rect(mouseX,mouseY,rectWidth,rectHeight);
  }
}
}

function keyTyped() {
  if (keyIsDown(38)) {
   	rectHeight += 3;
    rectWidth += 2;
    ellipseWidth += 3;
  }
  if (keyIsDown(40)) {
   	rectHeight -= 3;
    rectWidth -= 2;
    ellipseWidth -= 3;
  }
  if (keyIsDown(87)) {
    fill(255)
   	background(255);
  }
  if(keyIsDown(66)) {
    fill(0)
   	background(0);
  }
  if(keyIsDown(81)) {
   	fill(random(255),random(255),random(255));
  }
}
