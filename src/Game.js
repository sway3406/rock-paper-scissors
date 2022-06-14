class Game {
  constructor(gameType) {
    this.players = [];
    this.gameType = gameType;
    this.gameWinner;
  }

  getClassicWinner() {
    var pc = this.players[0].pickFighter;
    var pn = this.players[0].name;
    var cc = this.players[1].pickFighter;
    var cs = this.players[1].playerScore;
    var cn = this.players[1].name;
      if (pc === cc) {
        this.gameWinner = `It's a Draw!`;
      } else if (pc === 'rock' && cc === 'scissor') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'scissor' && cc === 'paper') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'paper' && cc === 'rock') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else {
        ++this.players[1].playerScore;
        this.gameWinner = cn;
      }
    }

  getFlavorfulWinner() {
    var pc = this.players[0].pickFighter;
    var ps = this.players[0].playerScore;
    var pn = this.players[0].name;
    var cc = this.players[1].pickFighter;
    var cs = this.players[1].playerScore;
    var cn = this.players[1].name;
      if (pc === cc) {
        this.gameWinner = `It's a draw!`;
      } else if (pc === 'cake' && cc === 'cupcake' || cc === 'pie') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'pie' && cc === 'cookie' || cc === 'Ice Cream') {
      ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'Ice Cream' && cc === 'cupcake' || cc === 'cake') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'cupcake' && cc === 'cookie' || cc === 'pie') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'cookie' && cc === 'Ice Cream' || cc === 'cake') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else {
        ++this.players[1].playerScore;
        this.gameWinner = cn;
      }
    }
  }
