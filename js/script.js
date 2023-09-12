// Array emails invited

const invitedEmails = [
  'matam@gmail.com',
  'marioz@gmail.com',
  'federico@gmail.com',
  'stefano@gmail.com'
]

console.log(invitedEmails);
const emailRequest = prompt('Inserire email per il controllo');

for (let i = 0; i < invitedEmails.length;i++){
  const checkEmail = invitedEmails[i];

if (checkEmail === emailRequest){
  console.log('yessss');
}
  
}