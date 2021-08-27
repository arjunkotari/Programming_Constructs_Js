//Take a range of numbers as input and output the Prime Numbers in that range

const prompt = require('prompt-sync')();
const startNumber = Number(prompt("Enter Starting Number : "));
const endNumber = Number(prompt("Enter Ending Number : "));

if (startNumber >= 0 && startNumber < endNumber) {
    for(let number = startNumber; number <= endNumber; number++) {
        let flag = 0;
    
    for (let index = 2; index <= number / 2; index++) {
        if (number % index == 0){
            flag = 1;
            break;
        } 
    }
    if (flag == 0 && number != 1)
        console.log(number);
    }
}
else
    console.log("Input Invalid..");