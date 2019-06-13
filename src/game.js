class Game {
  drawGrid() {
    for (var x = 0; x <= width; x += width / 10) {
      for (var y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }

  }
}

// const gameArr = [
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// [[],[],[],[],[],[],[],[],[],[]],
// ]

// gameArr[row][col][0] = player1.row

class Player {
  constructor(row, col, color) {
    this.row = row;
    this.col = col;
    this.direction = "down";
    this.color = color;

  }
  moveUp() {
    if(this.col > 0) {
    this.direction = "up";
    this.col -= 100;}
  }
  moveDown() {
    if(this.col < 900) {
    this.direction = "down";
    this.col += 100;}
  }
  moveLeft() {
    if(this.row > 0) {
    this.direction = "left";
    this.row -= 100;}
  }
  moveRight() {
    if(this.row < 900) {
    this.direction = "right";
    this.row += 100;}
  }

  draw() {
    if (this.direction === "up") {
      image(imgUp, this.row, this.col, 100, 100);
    } else if (this.direction === "down") {
      image(imgDown, this.row, this.col, 100, 100);
    } else if (this.direction === "right") {
      image(imgRight, this.row, this.col, 100, 100);
    } else if (this.direction === "left") {
      image(imgLeft, this.row, this.col, 100, 100);
    }
  }
}
