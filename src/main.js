const game = new Game();
let imgDown;
let imgUp;
let imgRight;
let imgLeft;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  imgDown = loadImage("../assets/character-down.png");
  imgUp = loadImage("../assets/character-up.png");
  imgRight = loadImage("../assets/character-right.png");
  imgLeft = loadImage("../assets/character-left.png");
}

const player1 = new Player(0, 0);

function draw() {
  game.drawGrid();
  

  
  //image(imgDown, player1.row, player1.col, 100, 100);
  // image(imgUp, player1.row, player1.col, 100, 100);
  // image(imgRight, player1.row, player1.col, 100, 100);
  // image(imgLeft, player1.row, player1.col, 100, 100);

}


function keyPressed() {

  if (keyCode === 38) {
    clear();
    player1.moveUp();
    image(imgUp, player1.row, player1.col, 100, 100);
  } else if (keyCode === 40) {
    clear();
    player1.moveDown();
    image(imgDown, player1.row, player1.col, 100, 100);
  } else if (keyCode === 37) {
    clear();
    player1.moveLeft();
    image(imgLeft, player1.row, player1.col, 100, 100);
  } else if (keyCode === 39) {
    clear();
    player1.moveRight();
    image(imgRight, player1.row, player1.col, 100, 100);
  }
}




