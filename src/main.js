// Query Selectors
var gameHeader = document.querySelector('.game-header');
var chooseGameContainer =document.querySelector('.choose-game-container');
var classicGame = document.querySelector('#classic-game-box');
var flavorfulGame = document.querySelector('#flavorful-game-box');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');
var resultsContainer = document.querySelector('.results-container');
var chosenPersonImg = document.querySelector('#person-choice');
var chosenComputerImg = document.querySelector('#computer-choice');
var personScore = document.querySelector('#human-score');
var computerScore = document.querySelector('#computer-score');
var resetEverything = document.querySelector('#reset-button');
var whoWon = document.querySelector('.who-won');

//Buttons
var changeGameButton = document.querySelector('#change-game-button');
var resetGameButton = document.querySelector('#reset-game-button');
var fighterButtons = document.querySelector('.main-stage');


//Event Handlers
window.addEventListener('load', createPlayers);
window.addEventListener('load', chooseGameHeader)
classicGame.addEventListener('click', showClassicGame);
flavorfulGame.addEventListener('click', showFlavorGame);
changeGameButton.addEventListener('click', changeGame);
fighterButtons.addEventListener('click', function(event){assignFighters(event)});
resetEverything.addEventListener('click', resetScore);

var game;
var human;
var computer;

function createPlayers() {
  human = new Player({name: 'Human'});
  computer = new Player({name: 'Computer'});
}

function chooseGameHeader() {
  gameHeader.innerHTML = `<h2>Choose A Game</h2>`
}

function showClassicGame() {
  game = new Game('classics');
  game.players.push(human, computer);
  chooseGameContainer.classList.add('hidden');
  gameHeader.innerHTML = `<h2>Select A Fighter</h2>`
  classicContainer.classList.remove('hidden');
}

function showFlavorGame() {
  game = new Game('flavorfuls');
  game.players.push(human, computer);
  chooseGameContainer.classList.add('hidden');
  gameHeader.innerHTML = `<h2>Select A Fighter</h2>`
  flavorfulContainer.classList.remove('hidden');
}

function changeGame() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  chooseGameContainer.classList.remove('hidden');
  chooseGameHeader();
  resetScore();
}

function assignFighters(event) {
  if (event.target.classList.contains('fighter-buttons') && game.gameType === 'classics') {
    human.updatePlayerFighter(event);
    computer.randomComputerFighter('classics');
    pickWinner('classics');
   } else if (event.target.classList.contains('fighter-buttons') && game.gameType === 'flavorfuls') {
    human.updatePlayerFighter(event);
    computer.randomComputerFighter('flavorfuls');
    pickWinner('flavorfuls');
  }
}

function pickWinner(gameType) {
  if (gameType === 'classics') {
   game.getClassicWinner();
   showResults();
 } else {
   game.getFlavorfulWinner();
   showResults();
  }
}

function showResults() {
    classicContainer.classList.add('hidden');
    flavorfulContainer.classList.add('hidden');gameHeader.innerHTML = `<h2>Results</h2>`
    resultsContainer.classList.remove('hidden');
    chosenPersonImg.setAttribute( "src" , './assets/fighters/'+ game.players[0].pickFighter +'-svgrepo-com.svg');
    chosenComputerImg.setAttribute("src", './assets/fighters/'+ game.players[1].pickFighter +'-svgrepo-com.svg')
    showWinner();
    showScore();
    resetGame();
}

function showWinner() {
 if (game.gameWinner === `It's a Draw!`) {
   whoWon.innerHTML = game.gameWinner;
 } else if (game.gameWinner === `Human`) {
   whoWon.innerHTML = `You Won!`
 } else {
   whoWon.innerHTML = `The ${game.gameWinner} Won`
 }
}

function showScore() {
  personScore.innerText = game.players[0].playerScore
  computerScore.innerText = game.players[1].playerScore
}

function resetGame() {
  if(game.gameType === 'classics') {
    setTimeout(function() {classicContainer.classList.remove('hidden'), resultsContainer.classList.add('hidden'), gameHeader.innerHTML = `<h2>Select A Fighter</h2>`}, 2000);
  } else {
    setTimeout(function() {flavorfulContainer.classList.remove('hidden'), resultsContainer.classList.add('hidden'), gameHeader.innerHTML = `<h2>Select A Fighter</h2>`}, 2000);
  }
}

function resetScore() {
  game.players[0].playerScore = 0;
  game.players[1].playerScore = 0;
  showScore();
}
