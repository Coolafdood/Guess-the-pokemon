const checkGuess = () => {
  const userGuess = document.getElementById('guessInput').value.toLowerCase();
};
let currentPokemonId = 0;

const pokemonList = [
  { name: "pikachu", img: "assets/images/pikachu.png" },
  { name: "charmander", img: "assets/images/charmander.png" },
  { name: "bulbasaur", img: "assets/images/bulbasaur.png" },
  { name: "squirtle", img: "assets/images/squirtle.png" }
];

const resultText = document.getElementById('resultText');
