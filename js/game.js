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

// ---------- Pure logic functions (testable in Jest) ----------
function isCorrectGuess(userGuess, pokemonId, list) {
  return userGuess.toLowerCase() === list[pokemonId].name;
}

function updateScore(isCorrect, currentScore) {
  return isCorrect ? currentScore + 1 : currentScore;
}

function nextPokemonId(currentId, listLength) {
  return (currentId + 1) % listLength;
}

// ---------- DOM-dependent game (browser only) ----------
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const pokemonImage = document.getElementById("pokemonImage");
    const guessInput = document.getElementById("guessInput");
    const resultText = document.getElementById("resultText");
    const checkGuessButton = document.getElementById("checkGuessButton");
    const nextPokemonButton = document.getElementById("nextPokemonButton");

    let currentPokemonId = 0;
    let score = 0;

    function runGame() {
      pokemonImage.src = pokemonList[currentPokemonId].img;
      resultText.textContent = "➡️ Enter your guess!";
      guessInput.value = "";
      guessInput.disabled = false;
    }

    function handleCheckGuess() {
      const userGuess = guessInput.value;
      const correct = isCorrectGuess(userGuess, currentPokemonId, pokemonList);
      score = updateScore(correct, score);

      if (correct) {
        resultText.textContent =
          `🎉 Correct! It's ${pokemonList[currentPokemonId].name}! Score: ${score}`;
      } else {
        resultText.textContent =
          "❌ Oops! That's not the correct Pokémon. Try again!";
      }
      guessInput.value = "";
    }

    function handleNextPokemon() {
      currentPokemonId = nextPokemonId(currentPokemonId, pokemonList.length);
      runGame();
    }

    checkGuessButton.addEventListener("click", handleCheckGuess);
    nextPokemonButton.addEventListener("click", handleNextPokemon);

    runGame();
  });
}

// ---------- Export for Jest ----------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { pokemonList, isCorrectGuess, updateScore, nextPokemonId };
}
