class Player {
  constructor(playerObj) {
    this.name = playerObj.name;
    this.pickFighter = null;
    this.playerScore = 0;
    this.classics = ['rock', 'paper', 'scissor'];
    this.flavorfuls = ['cake', 'pie', 'ice cream', 'cupcake', 'cookie'];
  }
  randomComputerFighter(gameType){
    this.pickFighter =  this[gameType][Math.floor(Math.random() * this[gameType].length)];
    console.log('computer picked:', this.pickFighter);
    console.log('gameType', gameType);

    //I need to have playerObj for computer added to Game class after picking a fighter

  }
  updatePlayerFighter(event) {
    console.log(event.target.classList.contains('fighter-buttons'))
    this.pickFighter = event.target.id;
    console.log('human picked:', this.pickFighter)

    //I need to have playerObj for human added to Game class after picking a fighter
  }
}
