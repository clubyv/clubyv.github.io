// Minesweeper
// Parker R
// 10/26/2018

//example for how a 3x3 spot will detect mines

//0 0 1
//0 #3 1
//0 1 0

//1 = mine
//0 = safe
// #3 = number of mines

let gameBoard = [];
let numberBoard = [];

let numberOfSquares;

let squareSize = 24;

let numberOfMines = 0;

let score = 0;
let gameOverTrue = 0;

function setup() {
  createCanvas(600, 600);
  background(200);

  numberOfSquares = squareSize*squareSize;

  for (let i = 0; i < squareSize; i++) {
    gameBoard[i] = [];
  }
  for (let i = 0; i < squareSize; i++) {
    numberBoard[i] = [];
  }

  establishGameBoard();
  setBoardNumbers();
  createGameBoard();
}

function draw() {
  setMineNumbers();
}

function establishGameBoard() {
  for (let y = 0; y < squareSize; y++) {
    for (let x = 0; x < squareSize; x++) {
      if (random(100) < 20 && numberOfMines <= 400) {
        gameBoard[y][x] = 1;
        numberOfMines++;
      }
      else {
        gameBoard[y][x] = 0;
      }
    }
  }
}

function setBoardNumbers() {

  for (let y = 0; y < squareSize; y++) {
    for (let x = 0; x < squareSize; x++) {

      let neighborMines = 0;

      for (let i = -1; i < 1; i++) {
        for (let j = -1; j < 1; j++) {
          if (x+i >= 0 && x+i < squareSize && y+j >= 0 && y+j < squareSize) {
            neighborMines += gameBoard[y+j][x+i];
          }
        }
      }
      numberBoard[y][x] = neighborMines;
    }
  }

}

function setMineNumbers() {
  for (let y = 0; y < squareSize; y++) {
    for (let x = 0; x < squareSize; x++) {
      if (gameBoard[y][x] === 1) {
        numberBoard[y][x] = -1;
      }
    }
  }
}

function createGameBoard() {
  for (let y = 0; y < squareSize; y++) {
    for (let x  = 0; x < squareSize; x++) {
      fill(255);
      rect(numberOfSquares*(x/squareSize), numberOfSquares*(y/squareSize), squareSize, squareSize);
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / squareSize);
  let y = floor(mouseY / squareSize);

  if (gameBoard[y][x] === 1) {
    gameOver();

  }
  else if (gameBoard[y][x] === 0) {
    checkMines(x, y);
  }
}

function checkMines(x, y) {
  if (numberBoard[y][x] > 0) {
    //display number
    textSize(squareSize);
    text(numberBoard[y][x], x*squareSize, y*squareSize);   
    numberBoard[y][x] = -2;
  }
  else if (numberBoard[y][x] === 0) {
    //flood fill all empty
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (x+i >= 0 && x+i < squareSize && y+j >= 0 && y+j < squareSize) {
          if (numberBoard[y+i][x+j] >= 1) {
            //display number in square
            textSize(squareSize);
            text(numberBoard[y+i][x+j], (x+j)*squareSize, (y+i)*squareSize);
          }
          else if (numberBoard[y+i][x+j] === 0){
            numberBoard[y+i][x+j] = -2;
            fill("gray");
            rect(numberOfSquares*((x+j)/squareSize), numberOfSquares*((y+i)/squareSize), squareSize, squareSize);

            if (j < 0 && i < 0) {
              checkMines(x+j-1, y+i-1);
            }
            else if (j < 0) {
              checkMines(x+j-1, y+i);
            }
            else if (i < 0) {
              checkMines(x+j, y+i-1);
            }

            else if (j > 0 && i > 0) {
              checkMines(x+j+1, y+i+1);
            }
            else if (j > 0) {
              checkMines(x+j+1, y+i);
            }
            else if (i > 0) {
              checkMines(x+j, y+i+1);
            }
          }
        }
      }
    }
  }
}

function gameOver() {
  //reveal all mine locations
  // display GAME OVER text
  //optional - set a timer after first click and display time
  gameOverTrue = 1;
  for (let y = 0; y <= squareSize; y++) {
    for (let x = 0; x <= squareSize; x++) {
      if (x >= 0 && x < squareSize && y >= 0 && y < squareSize) {
        if (gameBoard[y][x] === 1) {
          fill("red");
          rect(numberOfSquares*(x/squareSize), numberOfSquares*(y/squareSize), squareSize, squareSize);
        }
        if (numberBoard[y][x] === -2) {
          score++;
        }
      }
    }
  }
  fill("black");
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
  textSize(60);
  text("GAME OVER", width/2, 30);
  fill("green");
  textSize(35);
  text("SCORE: "+score, width/2, 70);
  score = 0;
}
