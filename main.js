//Global variables
var minRangeInput = document.querySelector(".min-range-input");
var maxRangeInput = document.querySelector(".max-range-input");
var minRangeDisplay = document.querySelector(".low-range-display"); //added later
var maxRangeDisplay = document.querySelector(".high-range-display"); //added later
var updateRangeButton = document.querySelector(".update-btn");
var challengerOneNameInput = document.querySelector(".name-input-one");
var challengerOneGuessInput = document.querySelector(".guess-input-one");
var nameDisplayOne = document.querySelector(".challenger-one-name-display");
var challengerTwoNameInput = document.querySelector(".name-input-two");
var challengerTwoGuessInput = document.querySelector(".guess-input-two");
var nameDisplayTwo = document.querySelector(".challenger-two-name");
var submitButton = document.querySelector(".submit-guess-btn");
var resetButton = document.querySelector(".submit-reset-btn");
var clearButton = document.querySelector(".submit-clear-btn");
var challengerOneGuessDisplay = document.querySelector(".guess-output-one");
var challengerTwoGuessDisplay = document.querySelector(".guess-output-two");
var randomNumber;
var minValue = 1;
var maxValue = 5;
var challengerOneGuessComparison = document.querySelector(".gues-note-one");
var challengerTwoGuessComparison = document.querySelector(".gues-note-two");
var resultsCard = document.querySelector(".card-hub");

//Event listeners
updateRangeButton.addEventListener("click", updateRange);
submitButton.addEventListener("click", submitNamesGuesses);
window.addEventListener('load', createRandomNumber);
// resetButton.addEventListener("click", resetGame);
clearButton.addEventListener("click", clearGame);

// Generate random number
function createRandomNumber() {
	var random = Math.floor((Math.random() * ((maxValue - minValue) + 1)) + minValue);
  randomNumber = random;
  console.log(randomNumber);
  }

function updateRange() {
  minValue = parseInt(minRangeInput.value);
  maxValue = parseInt(maxRangeInput.value);
  minRangeDisplay.innerText = minValue;
  maxRangeDisplay.innerText = maxValue;
  console.log(minValue);
  console.log(maxValue);
};

//Get names/guesses, then display names/guesses
function submitNamesGuesses(){
  checkGuesses();
  nameDisplayOne.innerText = challengerOneNameInput.value;
  nameDisplayTwo.innerText = challengerTwoNameInput.value;
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

function addCard() {
  resultsCard.innerHTML += 
      `<div class="card">
        <div class="card-challengers-container">
          <h4>${challengerOneNameInput.value}</h4>
          <div class="card-challengers-vs">VS</div>
          <h4>${challengerTwoNameInput.value}</h4>
        </div>
        <div class="winner-container">
          <h2>Challenger 2 Name</h2>
          <p>WINNER</p>
        </div>
        <div class="extensions">
          <p class="extensions-text">47 GUESSES</p>
          <p class="extensions-text">1.35 MINUTES</p>
          <span class="close-btn">&times;</span>
        </div>
      </div>  
    </div>`
};

function clearGame() {
  challengerTwoNameInput.value = "";
  challengerOneNameInput.value = "";
  challengerOneGuessInput.value = "";
  challengerTwoGuessInput.value = "";
};

