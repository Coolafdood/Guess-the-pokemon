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
