const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Function to send emails
const sendEmail = () => {
  // Create a transporter using your email service details
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cyberkozhi0@gmail.com',  // Replace with your Gmail address
      pass: 'cyberkozhi0@gmail.com1234',   // Replace with your Gmail password or app password
    },
  });

  // Email content
  const mailOptions = {
    from: 'cyberkozhi0@gmail.com',   // Replace with your Gmail address
    to: 'adnanmuhammad4393@gmail.com',  // Replace with the recipient's email address
    subject: 'Subject of the email',
    text: 'Body of the email',
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Schedule the email to be sent every day at a specific time (e.g., 8:00 AM)
cron.schedule('0 8 * * *', () => {
  console.log('Sending automated email...');
  sendEmail();
}, {
  scheduled: true,
  timezone: 'America/New_York',  // Adjust the timezone as needed
});
