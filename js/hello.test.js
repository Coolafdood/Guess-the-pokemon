const { isCorrectGuess, updateScore, nextPokemonId, shuffleArray, pokemonList } = require('./game');

test('isCorrectGuess returns true for correct guess', () => {
  expect(isCorrectGuess('pikachu', 0, pokemonList)).toBe(true);
});

test('isCorrectGuess returns false for wrong guess', () => {
  expect(isCorrectGuess('bulbasaur', 0, pokemonList)).toBe(false);
});

test('updateScore increments correctly', () => {
  expect(updateScore(true, 0)).toBe(1);
  expect(updateScore(false, 2)).toBe(2);
});

test('nextPokemonId loops correctly', () => {
  expect(nextPokemonId(0, 5)).toBe(1);
  expect(nextPokemonId(4, 5)).toBe(0);
});

test('shuffleArray returns a shuffled array', () => {
  const shuffled = shuffleArray(pokemonList);
  expect(shuffled.length).toBe(pokemonList.length);
  // Just ensure order changed sometimes
  expect(shuffled).not.toEqual(pokemonList);
});
