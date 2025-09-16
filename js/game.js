/* global document, window, module */
/* eslint-disable sort-keys */

// ---------- Pokémon Data ----------
const pokemonList = [
  { img: "assets/images/pikachu01.png",     name: "pikachu" },
  { img: "assets/images/charmander02.png",  name: "charmander" },
  { img: "assets/images/bulbasaur03.png",   name: "bulbasaur" },
  { img: "assets/images/squirtle04.png",    name: "squirtle" },
  { img: "assets/images/jigglypuff05.png",  name: "jigglypuff" },
  { img: "assets/images/meowth06.png",      name: "meowth" },
  { img: "assets/images/psyduck07.png",     name: "psyduck" },
  { img: "assets/images/snorlax08.png",     name: "snorlax" },
  { img: "assets/images/eevee09.png",       name: "eevee" },
  { img: "assets/images/vulpix10.png",      name: "vulpix" },
  { img: "assets/images/growlithe11.png",   name: "growlithe" },
  { img: "assets/images/machop12.png",      name: "machop" },
  { img: "assets/images/geodude13.png",     name: "geodude" },
  { img: "assets/images/onix14.png",        name: "onix" },
  { img: "assets/images/magnemite15.png",   name: "magnemite" },
  { img: "assets/images/gastly16.png",      name: "gastly" },
  { img: "assets/images/haunter17.png",     name: "haunter" },
  { img: "assets/images/alakazam18.png",    name: "alakazam" },
  { img: "assets/images/magikarp19.png",    name: "magikarp" },
  { img: "assets/images/gengar20.png",      name: "gengar" }
];

// ---------- Pure Logic Functions ----------
function isCorrectGuess(userGuess, pokemonId, list) {
  return userGuess.trim().toLowerCase() === list[pokemonId].name;
}

function updateScore(isCorrect, currentScore) {
  return (
    isCorrect
      ? currentScore + 1
      : currentScore
  );
}

function nextPokemonId(currentId, listLength) {
  const nextId = currentId + 1;
  return nextId % listLength;
}

// ---------- DOM-dependent Game (Browser only) ----------
/* eslint-disable-next-line no-undef */
if (typeof document !== "undefined") {
  /* eslint-disable-next-line no-undef */
  document.addEventListener("DOMContentLoaded", function () {
    const pokemonImage      = document.getElementById("pokemonImage");
    const guessInput        = document.getElementById("guessInput");
    const resultText        = document.getElementById("resultText");
    const checkGuessButton  = document.getElementById("checkGuessButton");
    const nextPokemonButton = document.getElementById("nextPokemonButton");

    let currentPokemonId = 0;
    let score = 0;

    // Display current Pokémon
    function runGame() {
      pokemonImage.src = pokemonList[currentPokemonId].img;
      resultText.textContent = "➡️ Enter your guess!";
      guessInput.value = "";
      guessInput.disabled = false;
    }

    // Check the user's guess
    function handleCheckGuess() {
      const userGuess = guessInput.value.trim();

      if (!userGuess) {
        resultText.textContent = "⚠️ Please enter a guess!";
        return;
      }

      const correct = isCorrectGuess(
        userGuess,
        currentPokemonId,
        pokemonList
      );

      score = updateScore(correct, score);

      resultText.textContent = (
        correct
          ? `🎉 Correct! It's ${pokemonList[currentPokemonId].name}! ` +
            `Score: ${score}`
          : "❌ Oops! That's not the correct Pokémon. Try again!"
      );

      guessInput.value = "";
    }

    // Move to the next Pokémon
    function handleNextPokemon() {
      currentPokemonId = nextPokemonId(
        currentPokemonId,
        pokemonList.length
      );

      score = (
        currentPokemonId === 0
          ? 0
          : score
      );

      runGame();
    }

    // Event listeners
    checkGuessButton.addEventListener("click", function () {
      handleCheckGuess();
    });

    nextPokemonButton.addEventListener("click", function () {
      handleNextPokemon();
    });

    guessInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        handleCheckGuess();
      }
    });

    // Start the game
    runGame();
  });
}

// ---------- Export for Jest ----------
/* eslint-disable-next-line no-undef */
if (typeof module !== "undefined" && module.exports) {
  /* eslint-disable-next-line no-undef */
  module.exports = {
    isCorrectGuess,
    nextPokemonId,
    pokemonList,
    updateScore
  };
}
