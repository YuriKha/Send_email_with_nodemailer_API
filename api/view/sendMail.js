const nodemailer = require('nodemailer');

module.exports={
    SendEmail:(to,body)=>{
        let mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.PROJECT_EMAIL,  
                pass: process.env.PROJECT_PASS.toString()  
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailDetails = {
            from: process.env.PROJECT_EMAIL,
            to: to,
            subject: body.Subject,
            html:`                                  
            <p>${body.Content}</p>
            `
        };
               
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs in Sendmail service, could NOT send the Email' + err);
            } else {
                console.log('Email was sent');
            }
        });
    }
}

