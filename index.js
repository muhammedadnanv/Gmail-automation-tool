const nodemailer = require('nodemailer');

// Create a transporter using your email service details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cyberkozhi0@gmail.com',
    pass: 'cyberkozhi0@gmail.com1234',
  },
});

// Email content
const mailOptions = {
  from: 'cyberkozhi0@gmail.com',
  to: 'adnanmuhammad4393@gmail.com',
  subject: 'Subject of the email',
  text: 'Body of the email',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
