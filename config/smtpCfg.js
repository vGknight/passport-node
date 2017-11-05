
let smtpCfg = {
    service: "SendGrid",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    host: "smtp.sendgrid.net",
    auth: {
        // api_user: "apikey",
        api_key: ""
    }
};

// mail optiosn for contact form
let contactMail = {
    from: '"Blog Site!" no-reply@sendgrid.net>', // sender address
    to: '', // list of receivers
    subject: 'Blogger Information Request', // Subject line
    text: ''			// plain text body
    // html: '<b></b>' 		// html body
};


module.exports = {

    smtpCfg: smtpCfg,
    contactMail: contactMail


}
