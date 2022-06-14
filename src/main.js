// Query Selectors
var chooseGameContainer =document.querySelector('.choose-game-container');
var classicGame = document.querySelector('#classic-game-box');
var flavorfulGame = document.querySelector('#flavorful-game-box');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');
var fighterButtons = document.querySelector('.main-stage');

//Buttons
var changeGameButton = document.querySelector('#change-game-button');
var resetGameButton = document.querySelector('#reset-game-button');

//Event Handlers
window.addEventListener('load', createPlayers);
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

//Toggling Functions
function showClassicGame() {
  game = new Game('classics');
  game.players.push(human, computer);
  chooseGameContainer.classList.add('hidden');
  classicContainer.classList.remove('hidden');
}

function showFlavorGame() {
  game = new Game('flavorfuls');
  game.players.push(human, computer);
  chooseGameContainer.classList.add('hidden');
  flavorfulContainer.classList.remove('hidden');
}

function showGamesOptions() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
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
 } else {
   game.getFlavorfulWinner();
 }
}


//This function will:
// Get Invoked when a user selects an element by id from the DOM. This will either be from the classicVersion or the flavorfulVersion
// This function will
// hide the classicVersion
// hide the flavorfulVersion
// show the results Container

// function showResults() {
//
// }

// This function will:
// Change based on user input (if/else if)?
// function toggleDynamicHeader {
//
// }

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


// function getPersonChoiceClassic() {
//
// }
//
// function getPersonChoiceFlavorful() {
//
// }
