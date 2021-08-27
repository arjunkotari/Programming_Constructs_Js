// To read a Number 1, 10, 100, 1000 and display unit, ten, hundred, thousand and so on....

const prompt = require('prompt-sync')();
let number = prompt("Enter A Number : ");

if (number == 1)
    console.log("Unit");
else if (number == 10)
    console.log("Ten");
else if (number == 100)
    console.log("One Hundred");
else if (number == 1000)
    console.log("One Thousand");
else
    console.log("Input Invalid..");