let playerRoll,computerRoll;

const dice = [1,2,3,4,5,6];

console.log(dice);

let randomNumber = Math.floor(Math.random() * dice.length);

playerRoll = dice[randomNumber];
console.log(playerRoll);

computerRoll = dice[randomNumber];
console.log(computerRoll);

if (playerRoll === computerRoll){
  console.log('DRAW');
}else if (playerRoll < computerRoll){
  console.log('Computer WIN');
}else {
  console.log('Player WIN');
}