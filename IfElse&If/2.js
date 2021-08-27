// Read A Number And Display The Week Day

const prompt = require("prompt-sync")();
let weekNumber = prompt("Enter Week day Number : ");
let weekDay;

if (weekNumber >= 1 && weekNumber <= 7) {
    if (weekNumber == 1)
        weekDay = "Sunday";
    else if (weekNumber == 2)
        weekDay = "Monday";
    else if (weekNumber == 3)
        weekDay = "Tuesday";
    else if (weekNumber == 4)
        weekDay = "Wednesday";
    else if (weekNumber == 5)
        weekDay = "Thursday";
    else if (weekNumber == 6)
        weekDay = "Friday";
    else if (weekNumber == 7)
        weekDay = "Saturday";
        console.log("Week Day Number : " +weekNumber+ "\nWeek day Is :" +weekDay);
}

else
    console.log("Invalid Input!!!")