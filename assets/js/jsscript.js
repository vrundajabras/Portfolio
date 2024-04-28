function downloadDocument() {

    var documentUrl = './assets/resume/Vrunda-Jabras-Resume.pdf';
    var downloadLink = document.createElement('a');
    downloadLink.href = documentUrl;
    downloadLink.download = 'document.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  function sendEmail() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    var receiverEmail = 'vrundajabras@gmail.com'; // Receiver's email addres
    //Create a mailto link with the email content
    var mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}&cc=${encodeURIComponent(email)}`;
  
    // Open the mailto link in a new tab
    window.open(mailtoLink);
  
    // Optionally, you can reset the form fields after sending the email
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    // Make a POST request to send_email.php with form data
  // var xhr = new XMLHttpRequest();
  // xhr.open('POST', 'send_email.php', true);
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     alert('Email sent successfully!');
  //   } else if (xhr.readyState === 4 && xhr.status !== 200) {
  //     alert('Failed to send email. Please try again later.');
  //   }
  // };
  // xhr.send('username=' + encodeURIComponent(username) +
  //          '&email=' + encodeURIComponent(email) +
  //          '&subject=' + encodeURIComponent(subject) +
  //          '&message=' + encodeURIComponent(message));
  }