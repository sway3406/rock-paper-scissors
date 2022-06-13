class Player {
  constructor(playerObj) {
    this.name = playerObj.name;
    this.pickFighter = null;
    this.playerScore = 0;
    this.classics = ['rock', 'paper', 'scissors'];
    this.flavorfuls = ['cake', 'pie', 'ice cream', 'cupcake', 'cookie'];
  }
  randomComputerFighter(gameType){
    this.pickFighter =  this[gameType][Math.floor(Math.random() * this[gameType].length)];
    console.log('this.pickFighter', this.pickFighter);
    console.log('gameType', gameType);
  }
  updatePlayerFighter(event) {
  if (event.target.classList.contains('.fighter-buttons')) {
  this.pickFighter = event.target.id;
  console.log('player choice', this.pickFighter)
  }
}
}
