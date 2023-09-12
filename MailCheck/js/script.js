// Array emails invited

const invitedEmails = [
  'matam@gmail.com',
  'marioz@gmail.com',
  'federico@gmail.com',
  'stefano@gmail.com',
  'giuliano@gmail.com',
  'fabiola@gmail.com'
];

const output = document.getElementById('output');

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
  output.innerHTML ='Sei nella lista invitati puoi entrare!';
}else {
  output.innerHTML ='Mi dispiace non sei nella lista invitati non puoi entrare!';
}


