let playerRoll,computerRoll;

const dice = [1,2,3,4,5,6];

console.log(dice);

const randomNumber = Math.floor(Math.random() * dice.length);

playerRoll = dice[randomNumber];
console.log(playerRoll);

computerRoll = dice[randomNumber];
console.log(computerRoll);
