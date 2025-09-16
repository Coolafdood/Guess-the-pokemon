const { pokemonList, isCorrectGuess, updateScore, nextPokemonId, shuffleArray } = require("./game.js");

describe("Pokémon Game Logic", () => {

  // ---------- isCorrectGuess ----------
  test("returns true for correct guess (case-insensitive)", () => {
    expect(isCorrectGuess("pikachu", 0, pokemonList)).toBe(true);
    expect(isCorrectGuess("Pikachu", 0, pokemonList)).toBe(true);
  });

  test("returns false for incorrect guess", () => {
    expect(isCorrectGuess("charmander", 0, pokemonList)).toBe(false);
  });

  // ---------- updateScore ----------
  test("increments score if correct", () => {
    expect(updateScore(true, 5)).toBe(6);
  });

  test("does not increment score if incorrect", () => {
    expect(updateScore(false, 5)).toBe(5);
  });

  // ---------- nextPokemonId ----------
  test("moves to next Pokémon", () => {
    expect(nextPokemonId(0, pokemonList.length)).toBe(1);
  });

  test("wraps to 0 at end of list", () => {
    expect(nextPokemonId(pokemonList.length - 1, pokemonList.length)).toBe(0);
  });

  // ---------- shuffleArray ----------
  test("shuffles array without losing items", () => {
    const shuffled = shuffleArray(pokemonList);
    expect(shuffled).toHaveLength(pokemonList.length);
    expect(shuffled).toEqual(expect.arrayContaining(pokemonList));
    const sameOrder = shuffled.every((p, i) => p === pokemonList[i]);
    expect(sameOrder).toBe(false);
  });

});
