//Gambler Game

const BET_LOST = 0;
let balance = 100;
let winCount = 0;
let Bets = 0;

while (balance > 0 && balance < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    if (bet == BET_LOST)
        balance--;
    else{
        balance++;
        winCount++;
    }
    Bets++    
}

console.log("Bets =" +Bets);
console.log("Total Wins = " +winCount);
console.log("Final Balance = " +balance);
