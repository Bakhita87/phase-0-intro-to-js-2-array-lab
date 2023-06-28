// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   

  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop("Bob");
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  const newCats2 = cats.slice();
  newCats2.unshift(name);
  return newCats2;
}

function removeLastCat() {
  const newCats3 = cats.slice();
  newCats3.pop();
  return newCats3;
}

function removeFirstCat() {
  const newCats = cats.slice();
  newCats.shift();
  return newCats;
}
