const prompt = require('prompt-sync')();

function isPalindrome(number) {
    let palindrome = number;
    let reversedNumber = 0;

    while (palindrome > 0) {
        let remainder = palindrome % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        palindrome = Math.floor(palindrome / 10);
    }
    if (reversedNumber == number)
        return true;
    else
        return false;
}

function isPrime(number){
    let prime = number;
    let count = 0;
    for(let check = 2; check < prime; check++){
        if(prime % check == 0){
            count++;
        }        
    }
    if(count == 0){
        return true;
    }
    else{
        return false;
    }
    
}
let number = Number(prompt("Enter the number : "));

let palindrome = isPalindrome(number);
let prime = isPrime(number);

if (palindrome == true && prime == true)
    console.log("Palindrome number is also prime number");
else
    console.log("Palindrome number is not prime number");