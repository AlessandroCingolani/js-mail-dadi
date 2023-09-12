let playerRoll,computerRoll;

const min = 1;
const max = 6;

let randomNumber = (Math.floor(Math.random() * (max - min + 1 )) + min);

playerRoll = randomNumber;
console.log(playerRoll);
computerRoll = randomNumber;
console.log(computerRoll);

if (playerRoll === computerRoll){
  console.log('DRAW');
}else if (playerRoll < computerRoll){
  console.log('Computer WIN');
}else {
  console.log('Player WIN');
}