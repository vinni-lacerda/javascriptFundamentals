let original = [1, 2, 3, 4, 5];
let copy = [...original];
let copy2 = original;

original.splice(2,2,6,7);
// console.log(original);

// console.log(original[10]);
//console.log(copy2);

const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
// console.log(slicedArr);

const myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed = myFish.splice(2, 2);
// console.log(removed);

let arr2 = [];
console.log(arr2.shift());

