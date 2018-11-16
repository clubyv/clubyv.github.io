// 2D Array Testing
// Parker R
// 10/23/2018

let board = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  displayBoard();
}

function displayBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let x = 0; x < board[i].length; x++) {
      fill(board[i][x]);
      rect(width*(x/board[i].length), height*(i/board.length), width/board[i].length, height/board.length);
    }
  }
}

function generateBoard() {
  board = [];

  for (let i = 0; i < Math.round(random(1,15)); i++) {
    board.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let x = 0; x < Math.round(random(1, 15)); x++) {
      board[i].push(color(random(1,255),random(1,255),random(1,255)));
    }
  }
}

function mousePressed() {
  generateBoard();
}
