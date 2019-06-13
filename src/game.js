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
    for (var i=0; i<10;i++) {
      for (var j=0; j<10; j++) {
        if (this.colorMatrix[i][j]) {
          fill(this.colorMatrix[i][j]);
          rect(SQUARE_SIDE*j, SQUARE_SIDE*i, SQUARE_SIDE, SQUARE_SIDE);
        }
      }
    }
  }
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
