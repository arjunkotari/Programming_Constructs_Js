// To read 5 Random 2 Digit values then find their Sum and Average

let number1 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number2 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number3 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number4 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let number5 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let sum = number1 + number2 + number3 + number4 + number5;
let average = sum / 5;
console.log("Sum is " + sum + " Average is " + average);