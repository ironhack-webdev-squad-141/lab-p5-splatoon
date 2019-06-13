class Game {
  constructor() {
    this.colorMatrix = [[],[],[],[],[],[],[],[],[],[]];
  }

  drawGrid() {
    let offset = SQUARE_SIDE;
    for (var i=0; i<11; i++) {
      line(0, i*offset, offset*10, i*offset);
      line(i*offset, 0, i*offset, offset*10);
    }
  }

  updateBoard(player) {
    this.colorMatrix[player.row][player.col] = player.color;
  }

  drawColorMatrix() {
    let scores = {'rgba(0,0,139,1)': 0, 'rgba(255,165,0,1)': 0};
    for (var i=0; i<10;i++) {
      for (var j=0; j<10; j++) {
        let squareColor = this.colorMatrix[i][j];
        if (squareColor) {
          fill(squareColor);
          scores[squareColor] += 1;
          rect(SQUARE_SIDE*j, SQUARE_SIDE*i, SQUARE_SIDE, SQUARE_SIDE);
        }
      }
    }
    document.getElementById("scoresDiv").innerHTML = `Player 1: ${scores['rgba(0,0,139,1)']}<br>Player 2: ${scores['rgba(255,165,0,1)']}`;
  }

/*   calculateAndDisplayScore() {
    // let scores = this.colorMatrix.reduce((accumulator, currentVal) => {
    //   if (accumulator.hasOwnProperty(currentVal)) {
    //     accumulator[currentVal] += 1;
    //   } else {
    //     accumulator[currentVal] = 1;
    //   }
    // }, {});
    this.colorMatrix.forEach((color) => {
      if (color = "darkblue") score1 += 10;
      if (color = "orange") score2 += 10;
    })
    console.log(score1, score2);
  } */
}

class Player {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }

  moveDown() {
    this.row < 9 ? this.row++ : console.log('Cannot move down');
  }

  moveRight() {
    this.col < 9 ? this.col++ : console.log('Cannot move right');
  }

  moveUp() {
    this.row > 0 ? this.row-- : console.log('Cannot move up');
  }

  moveLeft() {
    this.col > 0 ? this.col-- : console.log('Cannot move left');
  }

  drawPlayer() {
    image(this.image, SQUARE_SIDE*this.col, SQUARE_SIDE*this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

}
