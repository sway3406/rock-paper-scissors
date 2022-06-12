// Query Selectors
var classicVersion = document.querySelector('#classic-game-box');
var flavorfulVersion = document.querySelector('#flavorful-game-box');

var chooseGameContainer =document.querySelector('.choose-game-container');
var classicContainer = document.querySelector('.classic-game-container');
var flavorfulContainer =document.querySelector('.flavorful-game-container');

//Event Handlers
//window.addEventListener('load', fxn goes here)
classicVersion.addEventListener('click', showClassic);
flavorfulVersion.addEventListener('click', showFlavor);

function showClassic() {
chooseGameContainer.classList.add('hidden');
classicContainer.classList.remove('hidden');
}

function showFlavor () {
chooseGameContainer.classList.add('hidden');
flavorfulContainer.classList.remove('hidden');
}
