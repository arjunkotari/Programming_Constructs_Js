const prompt = require('prompt-sync')();

function isMagic(number)
   {
       var sum = 0;
       while (number > 0 || sum > 9)
       {
           if (number = 0)
           {
               number = sum;
               sum = 0;
           }
           sum += number % 10;
           number /= 10;
       }
       return (sum = 1);
   }
   
   let number = Number(prompt("Enter number : "));
    if (isMagic(number))
    console.log("Magic Number");          
    else
    console.log("Not a magic Number");
     