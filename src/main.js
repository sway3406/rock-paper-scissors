// Query Selectors
var classicVersion = document.querySelector('#classic-game-box');
var flavorfulVersion = document.querySelector('#flavorful-game-box');
var chooseGameContainer =document.querySelector('.choose-game-container');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');
var chooseGame = document.querySelector('.choose-game-container');

//Buttons
var changeGameButton = document.querySelector('#change-game-button');

//Event Handlers
window.addEventListener('load', createPlayers);
classicVersion.addEventListener('click', showClassic);
flavorfulVersion.addEventListener('click', showFlavor);
changeGameButton.addEventListener('click', showGames);

var human;
var computer;

//Instantiate players on page load
function createPlayers(){
human = new Player({name: human});
computer = new Player({name: computer});
}

//Toggling Functions
function showClassic() {
  chooseGameContainer.classList.add('hidden');
  classicContainer.classList.remove('hidden');
  computer.randomComputerFighter('classics');
}

function showFlavor () {
  chooseGameContainer.classList.add('hidden');
  flavorfulContainer.classList.remove('hidden');
  computer.randomComputerFighter('flavorfuls');
}

function showGames() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
  chooseGameContainer.classList.remove('hidden');

}








// Master Random function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//This function produces a randomly chosen element from the classics array
function getRandomClassic(classics) {
  return classics[getRandomIndex(classics)];
}

//This function produces a randomly chosen element from the flavorfuls array
function getRandomFlavorful(flavorfuls) {
  return flavorfuls[getRandomIndex(flavorfuls)];
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
