function sendEmail() {
  console.log('start');
  let name = document.getElementById('name').value;
  let email1 = document.getElementById('email').value;
  let body = document.getElementById('message').value;
  let message = 'message sent';
  Email.send({
    SecureToken: 'af057226-e591-4d8b-8d51-8309e688b544',
    To: '‫jsformsubmit@gmail.com‬',
    From: '‫jsformsubmit@gmail.com‬',
    Subject: 'Email from My web site contact form: ' + name,
    Body: email1 + body,
  }).then((message) => alert(message));
  console.log(email1);
  console.log('sent');
}
