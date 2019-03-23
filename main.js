//Global variables
var minRangeInput = document.querySelector(".min-range-input");
var maxRangeInput = document.querySelector(".max-range-input");
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
//Event listeners


var randomNumber;
var minValue = 1;
var maxValue = 100;
var challengerOneGuessComparison = document.getElementById("comparison-result-1");
var challengerTwoGuessComparison = document.getElementById("comparison-result-2");
var resultsCard = document.querySelector(".results-card");
//Event listeners
submitButton.addEventListener("click", submitNamesGuesses);
updateRangeButton.addEventListener("click", updateRange);
// updateRangeButton.addEventListener("click", updateRanges);

// Generate random number
function createRandomNumber() {
	var random = Math.floor((Math.random() * ((maxValue - minValue) + 1)) + minValue);
  randomNumber = random;
  console.log(randomNumber);
  }

function updateRange() {
  minValue = parseInt(minRangeInput.value);
  x = parseInt(maxRangeInput.value);
  console.log(parseInt(minRangeInput.value));
};

//Get names/guesses, then display names/guesses
function submitNamesGuesses(){
  checkGuesses();
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

function checkGuesses() {
    if (challengerOneGuessInput.value == randomNumber && 
      challengerTwoGuessInput.value == randomNumber) {
      challengerOneGuessComparison.innerText = "It's a tie!";
      challengerTwoGuessComparison.innerText = "It's a tie!";
  } else if (challengerOneGuessInput.value == randomNumber) {
      challengerOneGuessComparison.innerText = "Boom!";
      addCard()
  } else if (challengerTwoGuessInput.value == randomNumber) {
      challengerTwoGuessComparison.innerText = "Boom!";
      addCard()
  } else if (challengerOneGuessInput.value > randomNumber && 
      challengerTwoGuessInput.value > randomNumber) {
      challengerOneGuessComparison.innerText = "that's too high";
      challengerTwoGuessComparison.innerText = "that's too high";
  } else if (challengerOneGuessInput.value > randomNumber && 
      challengerTwoGuessInput.value < randomNumber) {
      challengerOneGuessComparison.innerText = "that's too high";
      challengerTwoGuessComparison.innerText = "that's too low";
  } else if (challengerOneGuessInput.value < randomNumber && 
      challengerTwoGuessInput.value < randomNumber) {
      challengerOneGuessComparison.innerText = "that's too low";
      challengerTwoGuessComparison.innerText = "that's too low";
  } else if (challengerOneGuessInput.value < randomNumber && 
      challengerTwoGuessInput.value > randomNumber) {
      challengerOneGuessComparison.innerText = "that's too low";
      challengerTwoGuessComparison.innerText = "that's too high";
  } else if (challengerTwoGuessInput.value > randomNumber) {
      challengerTwoGuessComparison.innerText = "that's too high";
  } else {
    return;
  };
};
