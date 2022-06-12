// Query Selectors
var classicVersion = document.querySelector('#classic-game-box');
var flavorfulVersion = document.querySelector('#flavorful-game-box');
var chooseGameContainer =document.querySelector('.choose-game-container');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');

//Buttons
var changeGameButton = document.querySelector('#change-game-button');

//Event Handlers
//window.addEventListener('load', fxn goes here)
classicVersion.addEventListener('click', showClassic);
flavorfulVersion.addEventListener('click', showFlavor);
changeGameButton.addEventListener('click', showGames);

function showClassic() {
  chooseGameContainer.classList.add('hidden');
  classicContainer.classList.remove('hidden');
}

function showFlavor () {
  chooseGameContainer.classList.add('hidden');
  flavorfulContainer.classList.remove('hidden');
}

function showGames() {
  classicContainer.classList.add('hidden');
  flavorfulContainer.classList.add('hidden');
  chooseGameContainer.classList.remove('hidden');

}
