/*jslint browser */

const pokemonImage = document.getElementById("pokemonImage");
const guessInput = document.getElementById("guessInput");
const resultText = document.getElementById("resultText");
const checkGuessButton = document.getElementById("checkGuessButton");
const nextPokemonButton = document.getElementById("nextPokemonButton");

let currentPokemonId = 0;
let score = 0;

const pokemonList = [
    {img: "assets/images/pikachu.png", name: "pikachu"},
    {img: "assets/images/charmander.png", name: "charmander"},
    {img: "assets/images/bulbasaur.png", name: "bulbasaur"},
    {img: "assets/images/squirtle.png", name: "squirtle"},
    {img: "assets/images/jigglypuff.png", name: "jigglypuff"},
    {img: "assets/images/meowth.png", name: "meowth"},
    {img: "assets/images/psyduck.png", name: "psyduck"},
    {img: "assets/images/snorlax.png", name: "snorlax"},
    {img: "assets/images/eevee.png", name: "eevee"},
    {img: "assets/images/vulpix.png", name: "vulpix"},
    {img: "assets/images/growlithe.png", name: "growlithe"},
    {img: "assets/images/machop.png", name: "machop"},
    {img: "assets/images/geodude.png", name: "geodude"},
    {img: "assets/images/onix.png", name: "onix"},
    {img: "assets/images/magnemite.png", name: "magnemite"},
    {img: "assets/images/gastly.png", name: "gastly"},
    {img: "assets/images/haunter.png", name: "haunter"},
    {img: "assets/images/alakazam.png", name: "alakazam"},
    {img: "assets/images/magikarp.png", name: "magikarp"},
    {img: "assets/images/gengar.png", name: "gengar"}
];

function runGame() {
    // Show the current Pokémon
    pokemonImage.src = pokemonList[currentPokemonId].img;
    resultText.textContent = "➡️ Enter your guess!";
    guessInput.value = "";
    guessInput.disabled = false;
}

// Check the user's guess
function checkAnswer() {
    const userGuess = guessInput.value.toLowerCase();
    const secretName = pokemonList[currentPokemonId].name;

    if (userGuess === secretName) {
        resultText.textContent = "🎉 Correct! It's " + secretName + "!";
        score++;
    } else {
        resultText.textContent =
            "❌ Oops! That's not the correct Pokémon. Try again!";
    }
    guessInput.value = "";
}

// Move to the next Pokémon or restart
function nextPokemon() {
    currentPokemonId += 1;

    if (currentPokemonId >= pokemonList.length) {
        resultText.textContent = `🏆 You've guessed all Pokémon! Final score: ${score} / ${pokemonList.length}. Restarting...`;
        guessInput.disabled = true;
        pokemonImage.style.display = "none";

        // Restart after 3 seconds
        setTimeout(restartGame, 3000);
        return;
    }

    runGame();
}

// Restart the game
function restartGame() {
    currentPokemonId = 0;
    score = 0;
    pokemonImage.style.display = "";
    guessInput.disabled = false;
    runGame();
}

// Event listeners
window.addEventListener("load", runGame);
checkGuessButton.addEventListener("click", checkAnswer);
nextPokemonButton.addEventListener("click", nextPokemon);

// Optional: log Pokémon names to console for testing
for (let i = 0; i < pokemonList.length; i++) {
    console.log(`Pokémon #${i + 1}: ${pokemonList[i].name}`);
}
