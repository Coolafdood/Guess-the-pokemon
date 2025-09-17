/* global document, module */
var pokemonList = [
  { img: "assets/images/pikachu01.png", name: "pikachu" },
  { img: "assets/images/charmander02.png", name: "charmander" },
  { img: "assets/images/bulbasaur03.png", name: "bulbasaur" },
  { img: "assets/images/squirtle04.png", name: "squirtle" },
  { img: "assets/images/jigglypuff05.png", name: "jigglypuff" },
  { img: "assets/images/meowth06.png", name: "meowth" },
  { img: "assets/images/psyduck07.png", name: "psyduck" },
  { img: "assets/images/snorlax08.png", name: "snorlax" },
  { img: "assets/images/eevee09.png", name: "eevee" },
  { img: "assets/images/vulpix10.png", name: "vulpix" },
  { img: "assets/images/growlithe11.png", name: "growlithe" },
  { img: "assets/images/machop12.png", name: "machop" },
  { img: "assets/images/geodude13.png", name: "geodude" },
  { img: "assets/images/onix14.png", name: "onix" },
  { img: "assets/images/magnemite15.png", name: "magnemite" },
  { img: "assets/images/gastly16.png", name: "gastly" },
  { img: "assets/images/haunter17.png", name: "haunter" },
  { img: "assets/images/alakazam18.png", name: "alakazam" },
  { img: "assets/images/magikarp19.png", name: "magikarp" },
  { img: "assets/images/gengar20.png", name: "gengar" }
];

// Pure Logic Functions
function isCorrectGuess(userGuess, pokemonId, list) {
  return (userGuess.trim().toLowerCase() === list[pokemonId].name);
}

function updateScore(isCorrect, currentScore) {
  return (isCorrect) ? currentScore + 1 : currentScore;
}

function nextPokemonId(currentId, listLength) {
  return (currentId + 1) % listLength;
}

function shuffleArray(array) {
  var copy = array.slice();
  var i, j, temp;
  for (i = copy.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

// DOM Game
if (typeof document === "object") {
  document.addEventListener("DOMContentLoaded", function() {
    var pokemonImage = document.getElementById("pokemonImage");
    var guessInput = document.getElementById("guessInput");
    var resultText = document.getElementById("resultText");
    var checkGuessButton = document.getElementById("checkGuessButton");
    var nextPokemonButton = document.getElementById("nextPokemonButton");

    var shuffledPokemonList = shuffleArray(pokemonList);
    var currentPokemonId = 0;
    var score = 0;
    var highScore = 0;
    var wrongGuesses = 0;

    function runGame() {
      pokemonImage.src = shuffledPokemonList[currentPokemonId].img;
      resultText.textContent = "➡️ Enter your guess!";
      guessInput.value = "";
      guessInput.disabled = false;
      guessInput.focus();
    }

    function showEndOverlay() {
      var overlay = document.createElement("div");
      overlay.className = "results-overlay";
      overlay.innerHTML = "<div class='results-content text-center'>" +
        "<h2>🏁 Round Finished!</h2>" +
        "<p>Final Score: " + score + "</p>" +
        "<p>Wrong Guesses: " + wrongGuesses + "</p>" +
        "<p>High Score: " + highScore + "</p>" +
        "<button id='restartButton' class='btn btn-success mt-3'>Restart Game</button>" +
        "</div>";
      document.body.appendChild(overlay);
      document.getElementById("restartButton").addEventListener("click", function() {
        document.body.removeChild(overlay);
        restartGame();
      });
    }

    function handleCheckGuess() {
      var userGuess = guessInput.value.trim();
      if (!userGuess) { resultText.textContent = "⚠️ Please enter a guess!"; return; }
      var correct = isCorrectGuess(userGuess, currentPokemonId, shuffledPokemonList);
      if (correct) {
        score = updateScore(true, score);
        if (score > highScore) { highScore = score; }
        resultText.textContent = "🎉 Correct! It's " + shuffledPokemonList[currentPokemonId].name + "! Score: " + score;
      } else {
        wrongGuesses += 1;
        resultText.textContent = "❌ Wrong guess!";
      }

      setTimeout(function() {
        if (currentPokemonId === shuffledPokemonList.length - 1) {
          showEndOverlay();
        } else {
          currentPokemonId = nextPokemonId(currentPokemonId, shuffledPokemonList.length);
          runGame();
        }
      }, 800);
    }

    function handleSkip() {
      wrongGuesses += 1;
      if (currentPokemonId === shuffledPokemonList.length - 1) {
        showEndOverlay();
      } else {
        currentPokemonId = nextPokemonId(currentPokemonId, shuffledPokemonList.length);
        runGame();
      }
    }

    function restartGame() {
      shuffledPokemonList = shuffleArray(pokemonList);
      currentPokemonId = 0;
      score = 0;
      wrongGuesses = 0;
      runGame();
    }

    checkGuessButton.addEventListener("click", handleCheckGuess);
    nextPokemonButton.addEventListener("click", handleSkip);
    guessInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") handleCheckGuess();
    });

    runGame();
  });
}

// Exports for testing
if (typeof module === "object" && module.exports) {
  module.exports = {
    pokemonList,
    isCorrectGuess,
    updateScore,
    nextPokemonId,
    shuffleArray
  };
}
