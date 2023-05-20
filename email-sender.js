// email-sender.js
const nodemailer = require('nodemailer');

// Configuration du transporteur d'e-mails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tlilinajwa95@email.com', 
    pass: 'yourPassword', 
  },
});

// Définition des options d'e-mail
const mailOptions = {
  from: 'tlilinajwa95@email.com', 
  to: 'friendmail@yahoo.com',
  subject: 'Test Email',
  text: 'Ceci est un e-mail de test envoyé depuis Node.js',
};

// Envoi de l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
  } else {
    console.log('E-mail envoyé avec succès:' + info.response);
  }
});
