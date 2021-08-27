//Read Numbers 1, 10, 100, 1000 and print unit, ten, hundred, thousand and so on using switch case

const prompt = require('prompt-sync')();
const number = Number(prompt("Enter A Number :"));

switch (number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("One Hundred");
        break;
    case 1000:
        console.log("One Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    default:
        console.log("Input Invalid..");
}