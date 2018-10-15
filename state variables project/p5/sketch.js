// tic tac toe
// Parker Rogal
// 9/26/2018
//

// 1|2|3
// -----
// 4|5|6
// -----
// 7|8|9

let state = 1;
let player = 1;
let winner;

// let loadWinnerGif, createWinnerGif;

const BOARD_HEIGHT = 600;
const BOARD_WIDTH = 600;
let px;
let py;

let qx1, qx2, qx3;
let qy1, qy2, qy3;

let area;
let areaShape = [-1, -1, -1, -1, -1, -1, -1, -1, -1]; //0 = O 1 = X

let moveCount = 0;

function preload() {
  // loadWinnerGif = loadImage("assets/giphy.gif");
  // createWinnerGif = createImg("assets/gihpy.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);

  px = (width-BOARD_WIDTH)/2;
  py = (height-BOARD_HEIGHT)/2;

  qx1 = px+600*(1/3);
  qx2 = px+600*(2/3);
  qx3 = px+600;

  qy1 = py+600*(1/3);
  qy2 = py+600*(2/3);
  qy3 = py+600;

}

function draw() {
  checkState();
  checkWinner();
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
  textAlign(CENTER);
  fill(255,0,0);
  textSize(200);
  text("Tic Tac Toe", width/2, 300);
  textSize(100);
  text("Click Anywhere to Start", width/2, height-400);
}

function gameScreen() {
  //background(255);

  strokeWeight(7);
  //draw the borders
  line(px, py, qx3, py);
  line(px, qy3, qx3, qy3);
  line(px, py, px, qy3);
  line(qx3, py, qx3, qy3);

  strokeWeight(3);
  //draw the grid
  line(qx1, py, qx1, qy3);
  line(qx2, py, qx2, qy3);
  line(px, qy1, qx3, qy1);
  line(px, qy2, qx3, qy2);
}

function winnerScreen(winnerNumber) {
  if (winnerNumber === 1) { //Player 1 wins
    background("yellow");
    textAlign(CENTER);
    fill(255,0,0);
    textSize(200);
    text("Player 1 Wins!", width/2, 300);
    // image(createWinnerGif, 0, 0, width, height);
    // createWinnerGif.position(0,0);
  }
  else if (winnerNumber === 2) { //Player 2 wins
    background("yellow");
    textAlign(CENTER);
    fill(255,0,0);
    textSize(200);
    text("Player 2 Wins!", width/2, 300);
    // image(loadWinnerGif, 0, 0, width, height);
  }
  else if (winnerNumber === 3) {
    background("yellow");
    textAlign(CENTER);
    fill(255,0,0);
    textSize(175);
    text("The Game is a Tie!", width/2, 300);
  }
}

function drawXShape(areaNumber) {
  strokeWeight(7);
  if (areaNumber === 1) {
    line(px, py, qx1, qy1);
    line(qx1, py, px, qy1);
  }
  else if (areaNumber === 2) {
    line(qx1, py, qx2, qy1);
    line(qx2, py, qx1, qy1);
  }
  else if (areaNumber === 3) {
    line(qx2, py, qx3, qy1);
    line(qx3, py, qx2, qy1);
  }
  else if (areaNumber === 4) {
    line(px, qy1, qx1, qy2);
    line(qx1, qy1, px, qy2);
  }
  else if (areaNumber === 5) {
    line(qx1, qy1, qx2, qy2);
    line(qx2, qy1, qx1, qy2);
  }
  else if (areaNumber === 6) {
    line(qx2, qy1, qx3, qy2);
    line(qx3, qy1, qx2, qy2);
  }
  else if (areaNumber === 7) {
    line(px, qy2, qx1, qy3);
    line(qx1, qy2, px, qy3);
  }
  else if (areaNumber === 8) {
    line(qx1, qy2, qx2, qy3);
    line(qx2, qy2, qx1, qy3);
  }
  else if (areaNumber === 9) {
    line(qx2, qy2, qx3, qy3);
    line(qx3, qy2, qx2, qy3);
  }
  player = 2;
}

function drawOShape(areaNumber) {
  if (areaNumber === 1) {
    ellipse(px+100, py+100, 175, 175);
  }
  else if (areaNumber === 2) {
    ellipse(qx1+100, py+100, 175, 175);
  }
  else if (areaNumber === 3) {
    ellipse(qx2+100, py+100, 175, 175);
  }
  else if (areaNumber === 4) {
    ellipse(px+100, qy1+100, 175, 175);
  }
  else if (areaNumber === 5) {
    ellipse(qx1+100, qy1+100, 175, 175);
  }
  else if (areaNumber === 6) {
    ellipse(qx2+100, qy1+100, 175, 175);
  }
  else if (areaNumber === 7) {
    ellipse(px+100, qy2+100, 175, 175);
  }
  else if (areaNumber === 8) {
    ellipse(qx1+100, qy2+100, 175, 175);
  }
  else if (areaNumber === 9) {
    ellipse(qx2+100, qy2+100, 175, 175);
  }
  player = 1;
}

function mousePressed() {
  if (state === 0) {
    state = 1;
  }
  else if (state === 1) {
    //check row
    if (mouseY > py && mouseY < qy1) { //top row
      if (mouseX > px && mouseX < qx1 && areaShape[0] === -1) { //left column
        area = 1;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx1 && mouseX < qx2 && areaShape[1] === -1) { //middle column
        area = 2;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx2 && mouseX < qx3 && areaShape[2] === -1) { //right column
        area = 3;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
    }
    else if (mouseY > qy1 && mouseY < qy2) { //middle row
      if (mouseX > px && mouseX < qx1 && areaShape[3] === -1) { //left column
        area = 4;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx1 && mouseX < qx2 && areaShape[4] === -1) { //middle column
        area = 5;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx2 && mouseX < qx3 && areaShape[5] === -1) { //right column
        area = 6;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
    }
    else if (mouseY > qy2 && mouseY < qy3) { //bottom row
      if (mouseX > px && mouseX < qx1 && areaShape[6] === -1) { //left column
        area = 7;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx1 && mouseX < qx2 && areaShape[7] === -1) { //middle column
        area = 8;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
      else if (mouseX > qx2 && mouseX < qx3 && areaShape[8] === -1) { //right column
        area = 9;
        moveCount++;
        if (player === 1) {
          drawXShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 1;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
        else if (player === 2) {
          drawOShape(area);
          if (areaShape[area-1] === -1) {
            areaShape[area-1] = 0;
          }
          else {
            areaShape[area-1] = areaShape[area-1];
          }
        }
      }
    }
  }
}

function checkWinner() {
  //check if game tied
  if (moveCount === 9) {
    winner = 3;
    winnerScreen(winner);
  }
  //check player 1 wins
  else if (areaShape[0] === 1) {
    if (areaShape[1] === 1 && areaShape[2] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
    else if (areaShape[3] === 1 && areaShape[6] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
    else if (areaShape[4] === 1 && areaShape[8] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
  }
  else if (areaShape[3] === 1) {
    if (areaShape[4] === 1 && areaShape[5] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
  }
  else if (areaShape[6] === 1) {
    if (areaShape[7] === 1 && areaShape[8] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
    else if (areaShape[4] === 1 && areaShape[2] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
  }
  else if (areaShape[1] === 1) {
    if (areaShape[4] === 1 && areaShape[7] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
  }
  else if (areaShape[2] === 1) {
    if (areaShape[5] === 1 && areaShape[8] === 1) {
      winner = 1;
      winnerScreen(winner);
    }
  }

  //check player 2 wins
  if (areaShape[0] === 0) {
    if (areaShape[1] === 0 && areaShape[2] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
    else if (areaShape[3] === 0 && areaShape[6] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
    else if (areaShape[4] === 0 && areaShape[8] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
  }
  else if (areaShape[3] === 0) {
    if (areaShape[4] === 0 && areaShape[5] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
  }
  else if (areaShape[6] === 0) {
    if (areaShape[7] === 0 && areaShape[8] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
    else if (areaShape[4] === 0 && areaShape[2] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
  }
  else if (areaShape[1] === 0) {
    if (areaShape[4] === 0 && areaShape[7] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
  }
  else if (areaShape[2] === 0) {
    if (areaShape[5] === 0 && areaShape[8] === 0) {
      winner = 0;
      winnerScreen(winner);
    }
  }
}
