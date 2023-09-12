// Array emails invited

const invitedEmails = [
  'matam@gmail.com',
  'marioz@gmail.com',
  'federico@gmail.com',
  'stefano@gmail.com'
];

// flag for check email
let emailMatching = false ;

console.log(invitedEmails);

const emailRequest = prompt('Inserire email per il controllo');

// check for invited 
for (let i = 0; i < invitedEmails.length;i++){
  const checkEmail = invitedEmails[i];

  // tolowercase for transform string
if (checkEmail === emailRequest.toLowerCase()){
  emailMatching = true;
}
}

// print message for invited or not invited
if(emailMatching){
  console.log('Sei nella lista invitati puoi entrare!');
}else {
  console.log('Mi dispiace non sei nella lista invitati e non puoi entrare!');
}


