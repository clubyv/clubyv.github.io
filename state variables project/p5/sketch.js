// tic tac toe
// Parker Rogal
// 9/26/2018
//

let state = 1;
let player = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
let topRight, topMid, topLeft;
let midRight, midMid, midLeft;
let botRight, botMid, botLeft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  strokeWeight(5);
  fill(0);

  topRight = mouseX < width/2-100 && mouseY < height/2-100;
  topMid = mouseX > width/2-100 && mouseX < width/2+100 && mouseY < height/2-100;
  topLeft = mouseX > width/2+100 && mouseY < height/2-100;

  midRight = mouseX < width/2-100 && mouseY > height/2-100 && mouseY < height/2+100;
  midMid = mouseX > width/2-100 && mouseX < width/2+100 && mouseY > height/2-100 && mouseY < height/2+100;
}

function draw() {
  checkState();
}

function drawX() {
  stroke(255, 0, 0);
  line();
}

function checkState() {
  if (state === 0) {
    startMenu();
  }
  else if (state === 1) {
    gameScreen();
  }
  else if (state === 2) {
    winnerScreen();
  }
}

function startMenu() {

}

function gameScreen() {

  //draw the grid
  line(width/2-100, height/2-250, width/2-100, height/2+250);
  line(width/2+100, height/2-250, width/2+100, height/2+250);
  line(width/2-250, height/2-100, width/2+250, height/2-100);
  line(width/2-250, height/2+100, width/2+250, height/2+100);

}

function winnerScreen() {

}

function mousePressed() {
  if (state === 0) {
    state = 1;
  }
  else if (state === 1) {
    if (topRight) {
      background(0);
    }
  }
}
