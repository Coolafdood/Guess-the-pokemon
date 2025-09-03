let pokemonImage = document.getElementById('pokemonImage');
let guessInput = document.getElementById('guessInput');
let resultText = document.getElementById('resultText');
let checkGuessButton = document.getElementById('checkGuessButton');
let nextPokemonButton = document.getElementById('nextPokemonButton');

let currentPokemonId = 0;

const pokemonList = [
  { name: "pikachu", img: "assets/images/pikachu.png" },
  { name: "charmander", img: "assets/images/charmander.png" },
  { name: "bulbasaur", img: "assets/images/bulbasaur.png" },
  { name: "squirtle", img: "assets/images/squirtle.png" },
  { name: "jigglypuff", img: "assets/images/jigglypuff.png" },
  { name: "meowth", img: "assets/images/meowth.png" },
  { name: "psyduck", img: "assets/images/psyduck.png" },
  { name: "snorlax", img: "assets/images/snorlax.png" },
  { name: "eevee", img: "assets/images/eevee.png" },
  { name: "vulpix", img: "assets/images/vulpix.png" },
  { name: "growlithe", img: "assets/images/growlithe.png" },
  { name: "machop", img: "assets/images/machop.png" },
  { name: "geodude", img: "assets/images/geodude.png" },
  { name: "onix", img: "assets/images/onix.png" },
  { name: "magnemite", img: "assets/images/magnemite.png" },
  { name: "gastly", img: "assets/images/gastly.png" },
  { name: "haunter", img: "assets/images/haunter.png" },
  { name: "alakazam", img: "assets/images/alakazam.png" },
  { name: "magikarp", img: "assets/images/magikarp.png" }
];


function runGame() {
	// Show the first Pokémon
	pokemonImage.src = pokemonList[currentPokemonId].img;
	resultText.textContent = "➡️ Enter your guess!";
	guessInput.value = "";
	guessInput.disabled = false;
	pokemonImage.style.display = '';
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
	guessInput.disabled = false;
	pokemonImage.style.display = '';
}

window.addEventListener('load', runGame);
nextPokemonButton.addEventListener('click', nextPokemon);
checkGuessButton.addEventListener('click', checkAnswer);
