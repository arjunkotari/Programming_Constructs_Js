//Add two Random Dice Number and Print the Result 

let diceNumber1 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceNumber2 = Math.floor(((Math.random() * 10) % 6) + 1);
let diceSum = diceNumber1 + diceNumber2;
console.log("The sum of dice numbers is " + diceSum);