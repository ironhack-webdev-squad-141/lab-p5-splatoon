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
const player2 = new Player(900, 900)

function draw() {
  game.drawGrid();
  player1.draw();
  player2.draw();
}
  





function keyPressed() {

  if (keyCode === 38) {
    clear();
    player1.moveUp();
  } else if (keyCode === 40) {
    clear();
    player1.moveDown();
    
  } else if (keyCode === 37) {
    clear();
    player1.moveLeft();
    
  } else if (keyCode === 39) {
    clear();
    player1.moveRight();
    
  }

    else if (keyCode === 87) {
      clear();
    player2.moveUp();
    
  } else if (keyCode === 83) {
    clear();
    player2.moveDown();
    
  } else if (keyCode === 65) {
    clear();
    player2.moveLeft();
    
  } else if (keyCode === 68) {
    clear();
    player2.moveRight();
    
  }
}



