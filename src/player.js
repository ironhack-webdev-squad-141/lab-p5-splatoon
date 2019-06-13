class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
/*     this.imgUp = loadImage("../assets/character-up.png");
    this.imgRight = loadImage("../assets/character-right.png");
    this.imgLeft = loadImage("../assets/character-left.png");
    this.imgDown = loadImage("../assets/character-down.png"); */
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
    line(10,30,50,200);
    //image(this.imgDown, 0, 0, 70, 70);
  }

}