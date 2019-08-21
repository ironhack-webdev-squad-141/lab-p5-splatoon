class Game {
  constructor() {
    this.colorMatrix = [[],[],[],[],[],[],[],[],[],[]];
    this.players = [];
    this.players.push(new Player(0, 0, true), new Player(9, 9));
  }

  drawGrid() {
    for (var i=0; i<11; i++) {
      line(0, i*SQUARE_SIDE, SQUARE_SIDE*10, i*SQUARE_SIDE);
      line(i*SQUARE_SIDE, 0, i*SQUARE_SIDE, SQUARE_SIDE*10);
    }
  }

  updateBoard(player) {
    this.colorMatrix[player.row][player.col] = player.color;
    player.draw();
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
    let text = '';
    this.players.forEach(player => {
      text += `Player ${player.p1 ? 1 : 2}: ${scores[player.color]}<br>`;
    });
    document.getElementById("scoresDiv").innerHTML = text;
  }

  setup() {
    this.players.forEach(player => player.setup());
  }

  keyPressed() {
    switch(keyCode) {
      case 83:
      case 87:
      case 65:
      case 68: 
        this.players[1].keyPressed(this.players[0].row, this.players[0].col);
        break;
      case UP_ARROW:
      case DOWN_ARROW:
      case RIGHT_ARROW:
      case LEFT_ARROW:  
        this.players[0].keyPressed(this.players[1].row, this.players[1].col)
        break;
    }
  }
}
