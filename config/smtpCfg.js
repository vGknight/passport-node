
let smtpCfg = {
    service: "SendGrid",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    host: "smtp.sendgrid.net",
    auth: {
        // api_user: "apikey",
        api_key: "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"
    }
};

// mail optiosn for contact form
let contactMail = {
    from: '"Blog Site!" no-reply@sendgrid.net>', // sender address
    to: 'gk@snipinternet.com', // list of receivers
    subject: 'Blogger Information Request', // Subject line
    text: ''			// plain text body
    // html: '<b></b>' 		// html body
};


module.exports = {

    smtpCfg: smtpCfg,
    contactMail: contactMail


}
