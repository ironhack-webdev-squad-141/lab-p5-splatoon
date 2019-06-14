
class Player {
  constructor(row, col, p1 = false) {
    this.col = col;
    this.row = row;
    this.p1 = p1;
    this.direction = 'down';
  }

  moveDown(row, col) {
    this.direction = 'down';
    if (this.row < 9 && !(this.row + 1 == row && this.col == col)) {
      this.row++
    }
  }

  moveRight(row, col) {
    this.direction = 'right';
    if (this.col < 9 && !(this.row == row && this.col + 1 == col)) {
      this.col++;
    } 
  }

  moveUp(row, col) {
    this.direction = 'up';
    if (this.row > 0 && !(this.row - 1 == row && this.col == col)) {
      this.row--;
    }
  }

  moveLeft(row, col) {
    this.direction = 'left';
    if (this.col > 0 && !(this.row == row && this.col - 1 == col)) {
      this.col--;
    } 
  }

  // drawPlayer() {
  //   image(this.images[this.direction], SQUARE_SIDE*this.col, SQUARE_SIDE*this.row, SQUARE_SIDE, SQUARE_SIDE);
  // }

  keyPressed(row, col) {
    clear();
    if (this.p1 == true) {
      switch(keyCode) {
        case DOWN_ARROW:
          this.moveDown(row, col);
          break;
        case RIGHT_ARROW:
          this.moveRight(row, col);
          break;
        case LEFT_ARROW:
          this.moveLeft(row, col);
          break;
        case UP_ARROW:
          this.moveUp(row, col);
          break;
      }
    } else {
      switch(keyCode) {
        case 87:
          this.moveUp(row, col);
          break;
        case 83: 
          this.moveDown(row, col);
          break;
        case 65:
          this.moveLeft(row, col);
          break;
        case 68:
          this.moveRight(row, col);
          break;
      }
    } 
  }

  setup() {
    console.log('setup');
    this.images = {
      'up': loadImage("../assets/character-up.png"), 
      'right': loadImage("../assets/character-right.png"), 
      'left': loadImage("../assets/character-left.png"), 
      'down': loadImage("../assets/character-down.png")
    };
    this.color = color(getRandomColor());
  }

  draw() {
    image(this.images[this.direction], SQUARE_SIDE*this.col, SQUARE_SIDE*this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
