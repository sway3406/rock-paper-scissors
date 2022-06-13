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
fighterButtons.addEventListener('click', function(event){assignFighterToHuman(event)})

var human;
var computer;

//Instantiate players on page load
function createPlayers(){
human = new Player({name: 'Human'});
computer = new Player({name: 'Computer'});
}

//Toggling Functions
function showClassicGame() {
  chooseGameContainer.classList.add('hidden');
  classicContainer.classList.remove('hidden');
  computer.randomComputerFighter('classics');
}

function showFlavorGame() {
  chooseGameContainer.classList.add('hidden');
  flavorfulContainer.classList.remove('hidden');
  computer.randomComputerFighter('flavorfuls');
}

function showGamesOptions() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
  chooseGameContainer.classList.remove('hidden');

}

function assignFighterToHuman(event) {
  if (event.target.classList.contains('fighter-buttons')) {
    human.updatePlayerFighter(event);
    console.log(event.target)
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
