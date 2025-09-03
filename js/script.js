let currentIndex = 0;

let pokemonList = [
  { name: "pikachu", img: "assets/images/pikachu.png" },
  { name: "charmander", img: "assets/images/charmander.png" },
  { name: "bulbasaur", img: "assets/images/bulbasaur.png" },
  { name: "squirtle", img: "assets/images/squirtle.png" }
];

// show the first Pokémon image on page load
window.onload = function () {
  document.getElementById("pokemonImage").src = pokemonList[currentIndex].img;
};

function checkGuess() {
  let guessedName = document.getElementById("guessInput").value.toLowerCase();
  let secretName = pokemonList[currentIndex].name;

  if (guessedName === secretName) {
    document.getElementById("result").textContent =
      "🎉 Correct! It's " + secretName + "!";
  } else {
    document.getElementById("result").textContent =
      "❌ Oops! That's not the secret Pokémon. Try again!";
  }
}

function nextPokemon() {
  // Move to the next Pokémon
  currentIndex++;

  if (currentIndex >= pokemonList.length) {
    document.getElementById("result").textContent =
      "🏆 You've guessed all the Pokémon!";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("pokemonImage").style.display = "none"; // hide image when done
    return;
  }

  // Update the image to the next Pokémon
  document.getElementById("pokemonImage").src = pokemonList[currentIndex].img;

  // Reset input + message
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent =
    "➡️ Next Pokémon! Enter your guess.";
}
