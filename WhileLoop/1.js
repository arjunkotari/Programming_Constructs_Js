//Take a command line argument n and print a table of power of 2 that are less than or equal to 2^n till 256 is reached

const prompt = require('prompt-sync')();
const number = prompt("Enter a number ");

let index = 0;

while (index <= number && Math.pow(2, index) <= 256) {
    console.log(`2 ^ ${index} = ${Math.pow(2, index)}`);
    index++;
} 