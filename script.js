function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: '‫jsformsubmit@gmail.com‬',
    Password: 'submitmyform%67',
    To: '‫jsformsubmit@gmail.com‬',
    From: '‫jsformsubmit@gmail.com‬',
    Subject: 'This is the subject',
    Body: 'And this is the body',
  }).then((message) => alert(message));

  // console.log('start');
  // let name = document.getElementById('name').value;
  // let email1 = document.getElementById('email').value;
  // let body = document.getElementById('message').value;
  // let message = 'message sent';
  // Email.send({
  //   SecureToken: '8c6d47f7-f175-474d-9571-477c6f8c5f86',
  //   To: '‫jsformsubmit@gmail.com‬',
  //   From: '‫jsformsubmit@gmail.com‬',
  //   Subject: 'Email from My web site contact form: ' + name,
  //   Body: email1 + body,
  // }).then((message) => alert(message));
  // console.log(email1);
  // console.log('sent');
}

function test() {
  console.log('test');
}
