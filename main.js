//Global variables
var minRangeInput = document.getElementById("min-range-input");
var maxRangeInput = document.getElementById("max-range-input");
var minRangeParsed = parseInt(minRangeInput);
var maxRangeParsed = parseInt(maxRangeInput);
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
var randomNumber = Math.floor(Math.random() * 100) + 1;
var challengerOneGuessComparison = document.getElementById("comparison-result-1");
var challengerTwoGuessComparison = document.getElementById("comparison-result-2");
//Event listeners
submitButton.addEventListener("click", submitNamesGuesses);
// updateRangeButton.addEventListener("click", updateRanges);
console.log(randomNumber);

//Generate random number
// function createRandomNumber(num) {
// 	var random = Math.floor(Math.random() * 100) + 1;
// 	console.log("local random " + random);
//   num = random;
//   }
//   console.log("global random" + RandomNumber);

//Get and display user's game ranges, create the secret number
// function updateRanges(minRangeParsed, maxRangeParsed) {
//   var minRange = minRangeParsed.innerText;
//   console.log(minRange);
//   var maxRange.innerText = maxRangeParsed.innerText;
//   var random = Math.floor((Math.random() * (100)) + 1);
//   console.log(random);
//   minRangeDisplay.value = minRange;
//   maxRangeDisplay.value = maxRange;
// }


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
  } else if(challengerOneGuessInput.value == randomNumber) {
      challengerOneGuessComparison.innerText = "Boom!";
  } else if (challengerTwoGuessInput.value == randomNumber) {
      challengerTwoGuessComparison.innerText = "Boom!";
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
    console.log("no else ifs match");
  };
};

// window.onload = createRandomNumber();