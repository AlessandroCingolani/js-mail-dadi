let playerRoll,computerRoll;
const output = document.getElementById('output');
const min = 1;
const max = 6;

let randomNumber = (Math.floor(Math.random() * (max - min + 1 )) + min);

playerRoll = (Math.floor(Math.random() * (max - min + 1 )) + min);
console.log(playerRoll);

computerRoll = (Math.floor(Math.random() * (max - min + 1 )) + min);
console.log(computerRoll);

if (playerRoll === computerRoll){
  output.innerHTML = 'DRAW';
}else if (playerRoll < computerRoll){
  output.innerHTML = 'Computer WIN';
}else {
  output.innerHTML ='Player WIN';
}