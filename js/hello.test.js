const { pokemonList, isCorrectGuess, updateScore, nextPokemonId } = require("./game.js");

describe("Pokémon Game Logic", () => {
  // isCorrectGuess tests
  test("should return true for a correct guess", () => {
    const result = isCorrectGuess("pikachu", 0, pokemonList);
    expect(result).toBe(true);
  });

  test("should return false for an incorrect guess", () => {
    const result = isCorrectGuess("charmander", 0, pokemonList);
    expect(result).toBe(false);
  });

  test("should be case-insensitive", () => {
    const result = isCorrectGuess("Pikachu", 0, pokemonList);
    expect(result).toBe(true);
  });

  // updateScore tests
  test("should increment score when guess is correct", () => {
    const result = updateScore(true, 5);
    expect(result).toBe(6);
  });

  test("should not change score when guess is incorrect", () => {
    const result = updateScore(false, 5);
    expect(result).toBe(5);
  });

  // nextPokemonId tests
  test("should move to the next Pokémon", () => {
    const result = nextPokemonId(0, pokemonList.length);
    expect(result).toBe(1);
  });

  test("should wrap back to 0 when at the end of the list", () => {
    const result = nextPokemonId(pokemonList.length - 1, pokemonList.length);
    expect(result).toBe(0);
  });
});
