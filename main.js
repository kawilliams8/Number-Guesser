var minRangeInput = document.getElementById("min-range-input");
var maxRangeInput = document.getElementById("max-range-input");
var minRangeDisplay = document.getElementById("low-range-display")
var maxRangeDisplay = document.getElementById("high-range-display")
var updateRangeButton = document.getElementById("update-range-button");
var challengerOneNameInput = document.getElementById("challenger-one-name")
var challengerOneGuessInput = document.getElementById("challenger-one-guess");
var NameDisplayOne = document.getElementById("challenger-one-name-display");
var challengerTwoNameInput = document.getElementById("challenger-two-name");
var challengerTwoGuessInput = document.getElementById("challenger-two-guess");
var NameDisplayTwo = document.getElementById("challenger-two-name-display");
var submitButton = document.getElementById("submit-button");
var resetButton = document.getElementById("reset-button");
var clearButton = document.getElementById("clear-button");
var challengerOneGuessDisplay = document.getElementById("challenger-one-current-guess");
var challengerTwoGuessDisplay = document.getElementById("challenger-two-current-guess");

//Generate random number
function randomNumber(minRangeInput,maxRangeInput) {
    return Math.floor((Math.random() * (maxRangeInput)) + minRangeInput);
  }

  //Get and display user's game ranges
function updateRanges () {
  var minRange = minRangeInput.value;
  var maxRange = maxRangeInput.value;
  //console.log(minRange,maxRange);
  randomNumber(minRange,maxRange);
  minRangeDisplay.innerText = minRange;
  maxRangeDisplay.innerText = maxRange;
}

var el = updateRangeButton;
el.onclick = updateRanges;

//Get names/guesses, then display names/guesses
function submitNamesGuesses(){
  var nameOne = challengerOneNameInput.value;
  var guessOne = challengerOneGuessInput.value;
  var nameTwo = challengerTwoNameInput.value;
  var guessTwo = challengerTwoGuessInput.value;
  NameDisplayOne.innerText = nameOne;
  NameDisplayTwo.innerText = nameTwo;
  var guessOneDisplay = challengerOneGuessInput.value;
  var guessTwoDisplay = challengerTwoGuessInput.value;
  challengerOneGuessDisplay.innerText = guessOneDisplay;
  challengerTwoGuessDisplay.innerText = guessTwoDisplay;
}

var el = submitButton;
el.onclick = submitNamesGuesses;

//Clear name/guess inputs and displays
//Use removeEventListener here?
function resetGameButton() {
  challengerOneNameInput.value = null;
  challengerOneGuessInput.value = null; 
  challengerTwoNameInput.value = null;
  challengerTwoGuessInput.value = null;
  //nameDisplayOne.textContent = "Challenger 1 Name";
  //nameDisplayTwo.innerText = "Challenger 2 Name";
  randomNumber();
}

var el = resetButton;
el.onclick = resetGameButton;
