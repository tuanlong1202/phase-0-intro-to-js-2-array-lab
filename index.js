// Write your solution here!

const cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    return [...cats,name];
}

function prependCat(name) {
    return [name,...cats];
}

function removeFirstCat() {
    return cats.slice(1,cats.length);
}

function removeLastCat() {
    return cats.slice(0,cats.length-1);
}