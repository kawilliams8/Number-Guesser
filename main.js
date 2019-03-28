//Global variables
var minRangeInput = document.querySelector(".min-range-input");
var maxRangeInput = document.querySelector(".max-range-input");
var minRangeDisplay = document.querySelector(".low-range-display");
var maxRangeDisplay = document.querySelector(".high-range-display");
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
var myCard = document.getElementsByClassName('card');
var removeAllCardsBtn = document.querySelector('.remove-all-btn');
var partTwo = document.querySelector('.part-two');
var challengerOneGuessComparison = document.querySelector(".gues-note-one");
var challengerTwoGuessComparison = document.querySelector(".gues-note-two");
var resultsCard = document.querySelector(".card-hub");
var errorOne = document.querySelector(".error-one");
var errorTwo = document.querySelector(".error-two");
var errorThree = document.querySelector(".error-three");
var minValue = 1;
var maxValue = 100;
var numberOfGuesses = 0;
var guessValue = 'GUESS';
var numberOfCards = 0;
var startTime;
var endTime;
var timeDiff;
var randomNumber;
var winner;

//Event listeners
updateRangeButton.addEventListener("click", updateRange);
updateRangeButton.addEventListener("click", rangeErrors);
submitButton.addEventListener("click", gameplayErrors);
submitButton.addEventListener("click", timerStarted);
window.addEventListener("load", createRandomNumber);
resetButton.addEventListener("click", resetGame);
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
createRandomNumber();
};

//Get names/guesses, check for errors, display names/guesses
function submitNamesGuesses() {
  checkGuesses();
  showRemoveAllCardsBtn();
  nameDisplayOne.innerText = challengerOneNameInput.value;
  nameDisplayTwo.innerText = challengerTwoNameInput.value;
  var guessOneDisplay = challengerOneGuessInput.value;
  var guessTwoDisplay = challengerTwoGuessInput.value;
  challengerOneGuessDisplay.innerText = guessOneDisplay;
  challengerTwoGuessDisplay.innerText = guessTwoDisplay;

};

function checkGuesses() {
  if (challengerOneGuessInput.value == randomNumber && 
    challengerTwoGuessInput.value == randomNumber) {
    challengerOneGuessComparison.innerText = "It's a tie!";
    challengerTwoGuessComparison.innerText = "It's a tie!";
    countGuesses();
  }
  
  
  if (challengerOneGuessInput.value == randomNumber && challengerOneGuessInput.value != challengerTwoGuessInput.value) {
    challengerOneGuessComparison.innerText = "BOOM!";
    winnerOne();
    createRandomNumber();
    incrementCard();
    timerEnded();
    addCard();
    resetCountGuesses();
  } else if (challengerOneGuessInput.value > randomNumber) {
    challengerOneGuessComparison.innerText = 'that\’s too high';
  } else if (challengerOneGuessInput.value < randomNumber) {
    challengerOneGuessComparison.innerText = 'that\’s too low';
  }
  
  
  if (challengerTwoGuessInput.value == randomNumber && challengerOneGuessInput.value != challengerTwoGuessInput.value) {
    challengerTwoGuessComparison.innerText = "BOOM!";
    winnerTwo();
    createRandomNumber();
    incrementCard();
    timerEnded();
    addCard();
    resetCountGuesses();
  } else if (challengerTwoGuessInput.value > randomNumber) {
    challengerTwoGuessComparison.innerText = 'that\’s too high';
  } else if (challengerTwoGuessInput.value < randomNumber) {
     challengerTwoGuessComparison.innerText = 'that\’s too low';
  }

  if(challengerOneGuessInput.value != randomNumber && challengerTwoGuessInput.value != randomNumber) {
    countGuesses();
  }

};

//result card with winner, game stats
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
        <p class="extensions-text"><span class="bold-extensions">${numberOfGuesses + 1}</span> ${guessValue}</p>
        <p class="extensions-text"><span class="bold-extensions">${timeDiff}</span> MINUTES</p>
        <span class="close-btn">&times;</span>
      </div>
  </div>`  
   for(var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function() {
      var x = this.parentElement.parentElement;
      x.style.transform = 'translateX(150%)';
      numberOfCards -= 1;
      showRemoveAllCardsBtn()
      
      setTimeout(function() {
        x.style.display = 'none';
      }, 500);
    })
  }
  setTimeout(slideCard, 10);
};

function slideCard() {
  for (var i = 0; i < myCard.length; i++) {
     myCard[i].style.transform = 'translateX(0px)';
  }
}


function timerStarted() {
if(numberOfGuesses === 1) {
  var date = new Date();
  var currentTime = date.getTime();
  startTime = currentTime;
 }
}

function timerEnded() {
  var date = new Date();
  var currentTime = date.getTime();
  endTime = currentTime;
  var milliSeconds = endTime - startTime;
  var fixedStartTime;

  if(numberOfGuesses === 0) {
    fixedStartTime = endTime;
  } else {
    fixedStartTime = startTime;
  }

  var timeFixed = endTime - fixedStartTime;

  var minutes = Math.floor(timeFixed / 60000);
  var seconds = ((timeFixed % 60000) / 1000).toFixed(0);
  timeDiff = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;

 }

removeAllCardsBtn.addEventListener('click', function() {
    for(var i = 0; i < myCard.length; i++) {
    myCard[i].style.transform = 'translateX(150%)';
  };
  
  setTimeout(function() {
    for(var i = 0; i < myCard.length; i++) {
    myCard[i].style.display = 'none';
  }
  }, 500);
  
  numberOfCards = 0;
  showRemoveAllCardsBtn()
});


function incrementCard() {
  numberOfCards += 1;
};

function showRemoveAllCardsBtn() {
  if (numberOfCards > 1) {
    removeAllCardsBtn.style.display = 'block';
  } else {
    removeAllCardsBtn.style.display = 'none';
  } 
}


function resetGame() {
  challengerOneGuessInput.value = "";
  challengerTwoGuessInput.value = "";
  createRandomNumber();
}

function clearGame() {
  challengerOneNameInput.value = "";
  challengerTwoNameInput.value = "";
  challengerOneGuessInput.value = "";
  challengerTwoGuessInput.value = "";
  nameDisplayOne.innerText = "Challenger 1 Name";
  nameDisplayTwo.innerText = "Challenger 2 Name";
  challengerOneGuessDisplay.innerText = "—";
  challengerTwoGuessDisplay.innerText = "—";
  challengerOneGuessComparison.innerText = "—";
  challengerTwoGuessComparison.innerText = "—";
  minRangeDisplay.innerText = 1;
  maxRangeDisplay.innerText = 100;
  minValue = 1;
  maxValue = 100;
  minRangeInput.value = '';
  maxRangeInput.value = '';
  numberOfGuesses = 0;
};



function countGuesses() {
  numberOfGuesses += 1;

  if (numberOfGuesses > 0) {
    guessValue = 'GUESSES';
  } else {
    guessValue = 'GUESS';
  }
}

function resetCountGuesses() {
  numberOfGuesses = -1;
  guessValue = 'GUESS';
}

function rangeErrors() {

  if (minRangeInput.value === "" || maxRangeInput.value === "")
    { errorOne.classList.remove("hidden");
  }
  if (minRangeInput.value !== "" && maxRangeInput.value !== "")
    { errorOne.classList.add("hidden");
  }
};

function gameplayErrors() {
  if (challengerOneNameInput.value === "" || challengerOneGuessInput.value === "")
    { errorTwo.classList.remove("hidden");
  }
  if (challengerOneNameInput.value !== "" && challengerOneGuessInput.value !== "")
    { errorTwo.classList.add("hidden");
  }
  if (challengerTwoNameInput.value === "" || challengerTwoGuessInput.value === "")
    { errorThree.classList.remove("hidden");
  }
  if (challengerOneNameInput.value !== "" && challengerTwoGuessInput.value !== "")
    { errorThree.classList.add("hidden");
  }

  if(challengerOneNameInput.value !== "" && challengerOneGuessInput.value !== "" && challengerTwoNameInput.value !== "" && challengerTwoGuessInput.value !== "") {
    submitNamesGuesses();
  }
};

