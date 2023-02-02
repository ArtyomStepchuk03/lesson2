// First task:

let x1 = 10;
let y1 = 5;

let x2 = 2;
let y2 = 3;

let firstSide = Math.abs(x1- x2)
let secondSide = Math.abs(y1 - y2);

console.log(firstSide * secondSide);

// Second task:

let a = 13.123456789;
let b = 2.123;
let n = 5;

console.log(Math.floor(a % 1 * Math.pow(10, n)));
console.log(Math.floor(b % 1 * Math.pow(10, n)));

console.log("a === b ", a === b);
console.log("a <= b ", a <= b);
console.log("a >= b ", a >= b);
console.log("a < b ", a < b);
console.log("a > b ", a > b);
console.log("a !== b ", a !== b);


// Third task:

let x = -35;
let y = 100;

let first = x + Math.round(Math.random() * Math.abs(x - y));
let second = x + Math.round(Math.random() * Math.abs(x - y));

console.log(x + Math.round(Math.random() * Math.abs(x - y)));
console.log(x + Math.round(Math.random() * Math.abs(x - y)));

console.log("first === second", first === second);
console.log("first < second", first < second);
console.log("first > second", first > second);
console.log("first <= second", first <= second);
console.log("first >= second", first >= second);
console.log("first !== second)", first !== second);