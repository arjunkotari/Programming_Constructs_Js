// Unit conversion
//inch to feet
let inch = 42;
let feet = inch / 12;
console.log("42 inch = " + feet + " feet");

//feet to meters
let lengthInFeet = 60;
let breadthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048; 
let breadthInMeters = breadthInFeet * 0.3048;
console.log("Plot size is " + lengthInMeters + " meters x " + breadthInMeters + " meters");

//Calculating area of plots in acres
let numberOfPlots = 25;
let area = numberOfPlots * lengthInMeters * breadthInMeters;
console.log("Area of " + numberOfPlots + " plots is " + area);