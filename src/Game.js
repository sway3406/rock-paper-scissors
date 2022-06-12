class Game {
  constructor() {
    this.player = [];
    this.playerPickFighter;
    this.gameWinner;
  }

// Fxn determines winner between person & computer
// Fxn increments person score(ps) and assigns this.gameWinner to person name(pn) or computer name (cn)
  getClassicWinner() {
    var pp = this.player[0].pickFighter;
    var ps = this.player[0].playerScore;
    var pn = this.player[0].name;
    var cp = this.player[1].pickFighter;
    var cs = this.player[1].playerScore;
    var cn = this.player[1].name;
      if (pp === cp) {
        this.gameWinner = `It's a Draw! Please choose again`;
      } else if (pp === 'rock' && cp === 'scissor') {
        ps++;
        this.gameWinner = pn;
      } else if (pp === 'scissor' && cp === 'paper') {
        ps++
        this.gameWinner = pn;
      } else if (pp === 'paper' && cp === 'rock') {
        ps++
        this.gameWinner = pn;
      } else {
        cs++;
        this.gameWinner = cn;
      }
    }

// Fxn determines winner between person & computer
// Fxn increments person score(ps) and assigns this.gameWinner to person name(pn) or computer name (cn)
  getFlavorfulWinner() {
    var pp = this.player[0].pickFighter;
    var ps = this.player[0].playerScore;
    var pn = this.player[0].name;
    var cp = this.player[1].pickFighter;
    var cs = this.player[1].playerScore;
    var cn = this.player[1].name;
      if (pp === cp) {
        this.gameWinner = `It's a draw! Please choose again`;
      } else if (pp === 'cake' && cp === 'cupcake' || 'pie') {
        ps++
        this.gameWinner = pn;
      } else if (pp === 'pie' && cp === 'cookie' || 'ice-cream') {
        ps++
        this.gameWinner = pn;
      } else if (pp === 'Ice-Cream' && cp === 'cupcake' || 'cake') {
        ps++
        this.gameWinner = pn;
      } else if (pp === 'cupcake' && cp === 'cookie' || 'pie') {
        ps++
        this.gameWinner = pn;
      } else if (pp === 'cookie' && cp === 'ice-cream' || 'cake') {
        ps++
        this.gameWinner = pn;
      } else {
        cs++;
        this.gameWinner = cn;
      }
    }
  }
