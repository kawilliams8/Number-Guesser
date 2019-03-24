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
var maxValue = 100;
var winner;
var numberOfGuesses = 1;
var guessValue = 'GUESS';
var challengerOneGuessComparison = document.querySelector(".gues-note-one");
var challengerTwoGuessComparison = document.querySelector(".gues-note-two");
var resultsCard = document.querySelector(".card-hub");

//Event listeners
updateRangeButton.addEventListener("click", updateRange);
submitButton.addEventListener("click", submitNamesGuesses);
window.addEventListener("load", createRandomNumber);
// resetButton.addEventListener("click", resetGame);
clearButton.addEventListener("click", clearGame);

// Generate random number
function createRandomNumber() {

  var min = parseInt(minValue);
  var max = parseInt(maxValue);
  var minFixed = min;
  var maxFixed = (max - min) + 1;
  randomNumber = Math.floor(Math.random() * maxFixed) + minFixed;
 console.log('RN: ' + randomNumber)

  }


function updateRange() {

  if (minRangeInput.value != "" && maxRangeInput.value != "") {
      minValue = minRangeInput.value;
      maxValue = maxRangeInput.value;
      minRangeDisplay.innerText = minRangeInput.value;
      maxRangeDisplay.innerText = maxRangeInput.value;
  } else if (minRangeInput.value == "" && maxRangeInput.value != "") {
      minValue = 1;
      maxValue = maxRangeInput.value;
      minRangeDisplay.innerText = 1;
      maxRangeDisplay.innerText = maxRangeInput.value;
  } else if (minRangeInput.value != "" && maxRangeInput.value == "") {
      minValue = minRangeInput.value;
      maxValue = 100;
      minRangeDisplay.innerText = minRangeInput.value;
      maxRangeDisplay.innerText = 100;
  } else {
      minValue = 1;
      maxValue = 100;
      minRangeDisplay.innerText = 1;
      maxRangeDisplay.innerText = 100;
  }
createRandomNumber()
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
      countGuesses()
  } else if (challengerOneGuessInput.value == randomNumber) {
      challengerOneGuessComparison.innerText = "Boom!";
      winnerOne()
      addCard()
      createRandomNumber()
      resetCountGuesses()
  } else if (challengerTwoGuessInput.value == randomNumber) {
      challengerTwoGuessComparison.innerText = "Boom!";
      winnerTwo()
      addCard()
      createRandomNumber()
      resetCountGuesses()
  } else if (challengerOneGuessInput.value > randomNumber && 
      challengerTwoGuessInput.value > randomNumber) {
      challengerOneGuessComparison.innerText = "that's too high";
      challengerTwoGuessComparison.innerText = "that's too high";
      countGuesses()
  } else if (challengerOneGuessInput.value > randomNumber && 
      challengerTwoGuessInput.value < randomNumber) {
      challengerOneGuessComparison.innerText = "that's too high";
      challengerTwoGuessComparison.innerText = "that's too low";
      countGuesses()
  } else if (challengerOneGuessInput.value < randomNumber && 
      challengerTwoGuessInput.value < randomNumber) {
      challengerOneGuessComparison.innerText = "that's too low";
      challengerTwoGuessComparison.innerText = "that's too low";
      countGuesses()
  } else if (challengerOneGuessInput.value < randomNumber && 
      challengerTwoGuessInput.value > randomNumber) {
      challengerOneGuessComparison.innerText = "that's too low";
      challengerTwoGuessComparison.innerText = "that's too high";
      countGuesses()
  } else if (challengerTwoGuessInput.value > randomNumber) {
      challengerTwoGuessComparison.innerText = "that's too high";
      countGuesses()
  };
};

function winnerOne() {
  winner = challengerOneNameInput.value;
}

function winnerTwo() {
  winner = challengerTwoNameInput.value;
}

function addCard() {
  var closeBtn = document.getElementsByClassName('close-btn');
  resultsCard.innerHTML += 
      `<div class="card">
        <div class="card-challengers-container">
          <h4>${challengerOneNameInput.value.toUpperCase()}</h4>
          <div class="card-challengers-vs">VS</div>
          <h4>${challengerTwoNameInput.value.toUpperCase()}</h4>
        </div>
        <div class="winner-container">
          <h2>${winner}</h2>
          <p>WINNER</p>
        </div>
        <div class="extensions">
          <p class="extensions-text">${numberOfGuesses} ${guessValue}</p>
          <p class="extensions-text">1.35 MINUTES</p>
          <span class="close-btn">&times;</span>
        </div>
      </div>  
    </div>`

    for (var i = 0; i < closeBtn.length; i++) {
      closeBtn[i].addEventListener('click', function() {
        var x = this.parentElement.parentElement;
        x.style.display = 'none';
      })
    }

};

function clearGame() {
  challengerTwoNameInput.value = "";
  challengerOneNameInput.value = "";
  challengerOneGuessInput.value = "";
  challengerTwoGuessInput.value = "";
  nameDisplayOne.innerText = "Challenger 1 Name";
  nameDisplayTwo.innerText = "Challenger 2 Name";
  challengerOneGuessDisplay.innerText = "—";
  challengerTwoGuessDisplay.innerText = "—";
  challengerOneGuessComparison.innerText = "—";
  challengerTwoGuessComparison.innerText = "—";
};


function countGuesses() {
  numberOfGuesses += 1;

  if (numberOfGuesses > 1) {
    guessValue = 'GUESSES';
  } else {
    guessValue = 'GUESS';
  }
  console.log(numberOfGuesses);
}

function resetCountGuesses() {
  numberOfGuesses = 1;
  guessValue = 'GUESS';
}

