//Compute factorial of a number taken as input

const prompt = require('prompt-sync')();
const number = Number(prompt("Enter a Number : "));
let factorial = 1;
for (let index = 1; index <= number; index++) {
    factorial = factorial * index ;
}
console.log("Factorial Of " +number+ " is " +factorial);