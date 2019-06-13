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
  //image(imgDown, player1.row, player1.col, 100, 100);}
  

}

  class Player {
    constructor (row, col) {
      this.row = row; 
      this.col = col;
    }
      moveUp() {
      this.col -= 100 ;
      }
      moveDown() {
        this.col += 100;
      }
      moveLeft() {
        this.row -= 100;
      }
      moveRight() {
      this.row += 100;
      }
  
    }
