//Take a command line argument n and print nth harmonic number

const prompt = require('prompt-sync')();
const number = Number(prompt("Enter a Number :"));
let harmonicNumber = 1;
for (let index = 2; index <= number; index++) {
    harmonicNumber += 1 / index;
}
console.log("Harmonic Number Is :" +harmonicNumber);