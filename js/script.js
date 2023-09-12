// Array emails invited

const invitedEmails = [
  'matam@gmail.com',
  'marioz@gmail.com',
  'federico@gmail.com',
  'stefano@gmail.com'
]

let emailMatching = false ;

console.log(invitedEmails);

const emailRequest = prompt('Inserire email per il controllo');

for (let i = 0; i < invitedEmails.length;i++){
  const checkEmail = invitedEmails[i];

if (checkEmail === emailRequest){
  emailMatching = true;
}

}
console.log(emailMatchingsadsa);