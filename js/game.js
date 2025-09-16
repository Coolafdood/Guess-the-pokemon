/* global document, window, module */
/* eslint-disable no-unused-vars */

// ---------- Pokémon Data ----------
const pokemonList = [
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

// ---------- Pure logic ----------
function isCorrectGuess(userGuess, pokemonId, list) {
  return userGuess.trim().toLowerCase() === list[pokemonId].name;
}

function updateScore(isCorrect, currentScore) {
  return isCorrect ? currentScore + 1 : currentScore;
}

function nextPokemonId(currentId, listLength) {
  return (currentId + 1) % listLength;
}

function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---------- DOM Game Logic ----------
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const pokemonImage = document.getElementById("pokemonImage");
    const guessInput = document.getElementById("guessInput");
    const resultText = document.getElementById("resultText");
    const checkGuessButton = document.getElementById("checkGuessButton");
    const nextPokemonButton = document.getElementById("nextPokemonButton");

    let shuffledPokemonList = shuffleArray(pokemonList);
    let currentPokemonId = 0;
    let score = 0;
    let highScore = 0;

    // ---------- Game Functions ----------
    function runGame() {
      pokemonImage.src = shuffledPokemonList[currentPokemonId].img;
      resultText.textContent = "➡️ Enter your guess!";
      guessInput.value = "";
      guessInput.disabled = false;
      guessInput.focus();
    }

    function advancePokemon(wasCorrect) {
      if (!wasCorrect) {
        // Count skipped/wrong guess as incorrect
        score = updateScore(false, score);
      }

      if (currentPokemonId === shuffledPokemonList.length - 1) {
        showEndOverlay();
      } else {
        currentPokemonId++;
        runGame();
      }
    }

    function handleCheckGuess() {
      const userGuess = guessInput.value.trim();
      if (!userGuess) {
        resultText.textContent = "⚠️ Please enter a guess!";
        return;
      }

      const correct = isCorrectGuess(userGuess, currentPokemonId, shuffledPokemonList);
      if (correct) score = updateScore(true, score);
      if (score > highScore) highScore = score;

      resultText.textContent = correct
        ? `🎉 Correct! It's ${shuffledPokemonList[currentPokemonId].name}! Score: ${score}`
        : "❌ Oops! That's not the correct Pokémon. Try again!";

      guessInput.value = "";
      if (correct) setTimeout(() => advancePokemon(true), 500);
    }

    function handleSkip() {
      resultText.textContent = `⏭ Skipped! It was ${shuffledPokemonList[currentPokemonId].name}.`;
      setTimeout(() => advancePokemon(false), 500);
    }

    function showEndOverlay() {
      let overlay = document.getElementById("resultsOverlay");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "resultsOverlay";
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0,0,0,0.85)";
        overlay.style.color = "#fff";
        overlay.style.display = "flex";
        overlay.style.flexDirection = "column";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = 9999;

        overlay.innerHTML = `
          <h2>🏁 Round Finished!</h2>
          <p id="finalScore"></p>
          <p id="finalHighScore"></p>
          <button id="restartButton" class="btn btn-success mt-3">Restart Game</button>
        `;
        document.body.appendChild(overlay);

        document.getElementById("restartButton").addEventListener("click", () => {
          shuffledPokemonList = shuffleArray(pokemonList);
          currentPokemonId = 0;
          score = 0;
          overlay.style.display = "none";
          runGame();
        });
      }

      document.getElementById("finalScore").textContent = `Score: ${score}`;
      document.getElementById("finalHighScore").textContent = `High Score: ${highScore}`;
      overlay.style.display = "flex";
    }

    // ---------- Event Listeners ----------
    checkGuessButton.addEventListener("click", handleCheckGuess);
    nextPokemonButton.addEventListener("click", handleSkip);

    guessInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") handleCheckGuess();
    });

    runGame();
  });
}

// ---------- Export for Jest ----------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { pokemonList, isCorrectGuess, updateScore, nextPokemonId, shuffleArray };
}
