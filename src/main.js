// Query Selectors
var gameHeader = document.querySelector('.game-header');
var chooseGameContainer =document.querySelector('.choose-game-container');
var classicGame = document.querySelector('#classic-game-box');
var flavorfulGame = document.querySelector('#flavorful-game-box');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');
var resultsContainer = document.querySelector('.results-container');

//Buttons
var changeGameButton = document.querySelector('#change-game-button');
var resetGameButton = document.querySelector('#reset-game-button');
var fighterButtons = document.querySelector('.main-stage');


//Event Handlers
window.addEventListener('load', createPlayers);
window.addEventListener('load', chooseGameHeader)
classicGame.addEventListener('click', showClassicGame);
flavorfulGame.addEventListener('click', showFlavorGame);
changeGameButton.addEventListener('click', showGamesOptions);
// ResetGameButton.addEventListener('click', resetGame);
fighterButtons.addEventListener('click', function(event){assignFighters(event)})

var game;
var human;
var computer;

//Instantiate players on page load
function createPlayers() {
  human = new Player({name: 'Human'});
  computer = new Player({name: 'Computer'});
}

function chooseGameHeader() {
 gameHeader.innerHTML = `<h2>Choose A Game</h2>`
}

//Toggling Functions
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

//This function will:
// Get Invoked when a user selects an element by id from the DOM. This will either be from the classicVersion or the flavorfulVersion
// This function will
// hide the classicVersion
// hide the flavorfulVersion
// show the results Container

function showResults(gameType) {
    classicContainer.classList.add('hidden');
    flavorfulContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// function showResults(gameType) {
//   if (gameType === 'classics') {
//     classicContainer.classList.add('hidden');
//     resultsContainer.classList.remove('hidden');
//   } else {
//     flavorfulContainer.classList.add('hidden');
//     resultsContainer.classList.remove('hidden');
//   }
// }

function showGamesOptions() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  chooseGameContainer.classList.remove('hidden');
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






//This function will:
// Display the image selected by the user to the DOM
// Image will be interpolated into results-container
// function showPersonFighter {
//
// }

// This function will:
// display the randomly chosen element by the computer
// Image will be interpolated into results-container
// function showRandomComputerFighter {
//
// }
