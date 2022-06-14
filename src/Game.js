class Game {
  constructor(gameType) {
    this.players = [];
    this.gameType = gameType;
    this.gameWinner;
  }

// Fxn determines winner between person & computer
// Fxn increments person score(ps) and assigns this.gameWinner to person name(pn) or computer name (cn)
  getClassicWinner() {
    var pc = this.players[0].pickFighter;
    var pn = this.players[0].name;
    var cc = this.players[1].pickFighter;
    var cs = this.players[1].playerScore;
    var cn = this.players[1].name;
      if (pc === cc) {
        this.gameWinner = `It's a Draw! Please choose again`;
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

// Fxn determines winner between person & computer
// Fxn increments person score(ps) and assigns this.gameWinner to person name(pn) or computer name (cn)
  getFlavorfulWinner() {
    var pc = this.players[0].pickFighter;
    var ps = this.players[0].playerScore;
    var pn = this.players[0].name;
    var cc = this.players[1].pickFighter;
    var cs = this.players[1].playerScore;
    var cn = this.players[1].name;
      if (pc === cc) {
        this.gameWinner = `It's a draw! Please choose again`;
      } else if (pc === 'cake' && cc === 'cupcake' || 'pie') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'pie' && cc === 'cookie' || 'ice-cream') {
      ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'Ice-Cream' && cc === 'cupcake' || 'cake') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pp === 'cupcake' && cp === 'cookie' || 'pie') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else if (pc === 'cookie' && cc === 'ice-cream' || 'cake') {
        ++this.players[0].playerScore;
        this.gameWinner = pn;
      } else {
        ++this.players[1].playerScore;
        this.gameWinner = cn;
      }
    }
  }
