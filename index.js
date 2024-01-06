const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Set up nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || ' communityfirefox87@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'l}+)4]~6{+tyq^OtFqIZ^&p'
  }
});

// Email content
const mailOptions = {
  from: process.env.EMAIL_USER || ' communityfirefox87@gmail.com',
  to: 'adnanmuhammad4393@gmail.com',
  subject: 'Daily Automation Email',
  text: 'Hello! This is your daily automated email.'
};

// Schedule the email to be sent every day at a specific time (e.g., 8:00 AM)
cron.schedule('0 8 * * *', () => {
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}, {
  timezone: 'America/New_York' // Replace with your timezone
});

console.log('Email automation scheduled. Waiting for emails to be sent...');
