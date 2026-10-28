const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'swastiksahni90@gmail.com',
        pass: 'hevn axvr bmwf mzqh'
    }
});

// Email details
const mailOptions = {
    from: 'swastiksahni90@gmail.com',
    to: 'swastiksahni90@gmail.com',
    subject: 'Hello from Swastik',
    text: 'Hello! This email was sent using Node.js.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent successfully!");
        console.log(info.response);
    }
});