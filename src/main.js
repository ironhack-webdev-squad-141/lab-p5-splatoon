const game = new Game();
const player1 = new Player(0,0);
const player2 = new Player(9,9);



function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  let imgUp = loadImage("../assets/character-up.png"); 
  let imgRight = loadImage("../assets/character-right.png");
  let imgLeft = loadImage("../assets/character-left.png");
  let imgDown = loadImage("../assets/character-down.png");
  let color1 = color('darkblue');
  let color2 = color('orange');
  player1.images = {down: imgDown, right: imgRight, left: imgLeft, up: imgUp};
  player1.color = color1;
  player2.images = {down: imgDown, right: imgRight, left: imgLeft, up: imgUp};
  player2.color = color2;
  player1.drawPlayer('down');
  player2.drawPlayer('down');

}

function draw() {
  game.drawGrid();
  game.drawColorMatrix();
  game.updateBoard(player1);
  game.updateBoard(player2);
  
}

function keyPressed() {
  clear();
  switch(keyCode) {
    case DOWN_ARROW:
      player1.moveDown();
      break;
    case RIGHT_ARROW:
      player1.moveRight();
      break;
    case LEFT_ARROW:
      player1.moveLeft();
      break;
    case UP_ARROW:
      player1.moveUp();
      break;
    case 87:
      player2.moveUp();
      break;
    case 83: 
      player2.moveDown();
      break;
    case 65:
      player2.moveLeft();
      break;
    case 68:
      player2.moveRight();
      break;
  }
}