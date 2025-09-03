let currentPokemonId = 0; // tracks which Pokémon is showing
// HTML element references
const pokemonImage = document.getElementById('pokemonImage');
const resultText = document.getElementById('resultText');
const guessInput = document.getElementById('guessInput');
const checkGuessButton = document.getElementById('checkGuessButton');
const nextPokemonButton = document.getElementById('nextPokemonButton');

const pokemonList = [
  { name: "pikachu", img: "assets/images/pikachu.png" },
  { name: "charmander", img: "assets/images/charmander.png" },
  { name: "bulbasaur", img: "assets/images/bulbasaur.png" },
  { name: "squirtle", img: "assets/images/squirtle.png" }
];
