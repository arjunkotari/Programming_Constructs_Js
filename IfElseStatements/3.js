//Read a Year And Test Whether The Year Is A Leap Year Or Not

const prompt = require('prompt-sync')();
const year = prompt("Enter Year : ");
if (year >= 1000 && year <= 9999) {
    if (year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) 
                console.log("Leap Year");
            else
                console.log("Not a Leap Year");
        }
        else
            console.log("Leap Year");
    }
    else
        console.log("Not A Leap Year");
}
else
    console.log("Not A Four Digit Number");