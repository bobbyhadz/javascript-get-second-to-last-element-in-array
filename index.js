// EXAMPLE 1 - Get the Second to Last Element in an Array in JavaScript

const arr = ['a', 'b', 'c', 'd'];

const secondToLast = arr[arr.length - 2];
console.log(secondToLast); // 👉️ "c"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Second to Last Element in an Array using Array.at()

// const arr = ['a', 'b', 'c', 'd'];

// const secondToLast = arr.at(-2);
// console.log(secondToLast); // 👉️ "c"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Second to Last Element in an Array using Array.slice()

// const arr = ['a', 'b', 'c', 'd'];

// const secondToLast = arr.slice(-2, -1)[0];
// console.log(secondToLast); // 👉️ 'c'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Second to Last Element in an Array using `reverse`

// const arr = ['a', 'b', 'c', 'd'];

// const secondToLast = [...arr].reverse()[1];
// console.log(secondToLast); // 👉️ 'c'
