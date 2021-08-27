  
//Take a input and determine if the number is prime or not

const prompt = require('prompt-sync')();
const number = Number(prompt("Enter A Number :"));
if (number >= 2) {
    let flag = 0;
    for (let index = 2; index <= number / 2; index++) {
        if (number % index == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log("Not A Prime Number");
    else
        console.log("Prime Number");
}
else
    console.log("Input Invalid..");