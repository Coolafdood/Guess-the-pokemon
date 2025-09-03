let pokemonImage = document.getElementById('pokemonImage');

let guessInput = document.getElementById('guessInput');
let resultText = document.getElementById('resultText');
let checkGuessButton = document.getElementById('checkGuessButton');
let nextPokemonButton = document.getElementById('nextPokemonButton');
function runGame() {

}

function checkAnswer() {
}
let currentPokemonId = 0;

const pokemonList = [
  { name: "pikachu", img: "assets/images/pikachu.png" },
  { name: "charmander", img: "assets/images/charmander.png" },
  { name: "bulbasaur", img: "assets/images/bulbasaur.png" },
  { name: "squirtle", img: "assets/images/squirtle.png" }
];
function runGame() {
  // Show the first Pokémon
  pokemonImage.src = pokemonList[currentPokemonId].img;
  resultText.textContent = "➡️ Enter your guess!";
  guessInput.value = "";
}
function checkAnswer() {
  let userGuess = guessInput.value.toLowerCase();
  let secretName = pokemonList[currentPokemonId].name;

  if (userGuess === secretName) {
    resultText.textContent = "🎉 Correct! It's " + secretName + "!";
  } else {
    resultText.textContent = "❌ Oops! That's not the correct Pokémon. Try again!";
  }

  guessInput.value = "";
}
function nextPokemon() {
  currentPokemonId++;

  if (currentPokemonId >= pokemonList.length) {
    resultText.textContent = "🏆 You've guessed all the Pokémon!";
    guessInput.disabled = true;
    pokemonImage.style.display = 'none';
    return;
  }

  pokemonImage.src = pokemonList[currentPokemonId].img;
  guessInput.value = "";
  resultText.textContent = "➡️ Next Pokémon! Enter your guess.";
}
