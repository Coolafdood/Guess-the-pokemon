let secretName = "pikachu"; // Secret Pokémon

    function checkGuess() {
      let guessedName = document.getElementById("guessInput").value;

      if (guessedName.toLowerCase() === secretName) {
        document.getElementById("result").textContent =
          "🎉 Correct! It's Pikachu!";
      } else {
        document.getElementById("result").textContent =
          "❌ Oops! That's not the secret Pokémon. Try again!";
      }
    }