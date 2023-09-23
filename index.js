// Write your solution here!
// Define the initial 'cats' array
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Create a new array with the original cats and the new cat
  const newCats = [...cats, name];
  return newCats;
}

function prependCat(name) {
  // Create a new array with the new cat and the original cats
  const newCats = [name, ...cats];
  return newCats;
}

function removeLastCat() {
  // Create a new array without the last cat
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  // Create a new array without the first cat
  const newCats = cats.slice(1);
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};

