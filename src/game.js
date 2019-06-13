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
    player.drawPlayer(player.direction);
  }

  drawColorMatrix() {
    let scores = {};
    for (var i=0; i<10;i++) {
      for (var j=0; j<10; j++) {
        let squareColor = this.colorMatrix[i][j];
        if (squareColor) {
          fill(squareColor);
          if (scores.hasOwnProperty(squareColor)) {
            scores[squareColor] += 1;
          } else {
            scores[squareColor] = 1;
          } 
          rect(SQUARE_SIDE*j, SQUARE_SIDE*i, SQUARE_SIDE, SQUARE_SIDE);
        } 
      }
    }
    document.getElementById("scoresDiv").innerHTML = `Player 1: ${scores[player1.color]}<br>Player 2: ${scores[player2.color]}`;
  }
}

class Player {
  constructor(row, col) {
    this.col = col;
    this.row = row;
    this.direction = 'down';
  }

  moveDown() {
    this.row < 9 ? this.row++ : console.log('Cannot move down');
    this.direction = 'down';
  }

  moveRight() {
    this.col < 9 ? this.col++ : console.log('Cannot move right');
    this.direction = 'right';
  }

  moveUp() {
    this.row > 0 ? this.row-- : console.log('Cannot move up');
    this.direction = 'up';
  }

  moveLeft() {
    this.col > 0 ? this.col-- : console.log('Cannot move left');
    this.direction = 'left';
  }

  drawPlayer(direction) {
    image(this.images[direction], SQUARE_SIDE*this.col, SQUARE_SIDE*this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

}
