const game = new Game();
const player1 = new Player(0,0);
const player2 = new Player(9,9);



function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  let imgUp = loadImage("../assets/character-up.png"); 
  // let imgRight = loadImage("../assets/character-right.png");
  // let imgLeft = loadImage("../assets/character-left.png");
  let imgDown = loadImage("../assets/character-down.png");
  let color1 = color('darkblue');
  let color2 = color('orange');
  player1.image = imgDown;
  player1.color = color1;
  player2.image = imgUp;
  player2.color = color2;

}

function draw() {
  game.drawGrid();
  game.drawColorMatrix();
  player1.drawPlayer();
  game.updateBoard(player1);
  player2.drawPlayer();
  game.updateBoard(player2);
  //game.calculateAndDisplayScore();
  
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


  // if (keyCode === ) {
  //   player1.moveDown();
  // } else if (keyCode === RIGHT_ARROW) {
  //   player1.moveRight();
  // } else if (keyCode === UP_ARROW) {
  //   player1.moveUp();
  // } else if (keyCode === LEFT_ARROW) {
  //   player1.moveLeft();
  // } 
}
// Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown()
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown()
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown()
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown()
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2