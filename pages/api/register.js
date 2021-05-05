const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "testcorporative@gmail.com",
        pass: "wojskpxlielogqnp"
    },
});

export default function handler(req, res) {
    try {
        let { name, email, message } = req.body
        var mailOptions = {
            from: "testcorporative@gmail.com",
            to: "botello.geiver@gmail.com",
            subject: 'Portfolio Website',
            text: "Nuevo Mensaje al portafolio",
            html: '<p>Name=' + name + '</p><p>Email=' + email + '</p><p>Message=' + message + '</p>'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error(error);
                res.send(500, err.message);
            } else {
                console.log("Email sent");
            }
        });
        res.status(200).json({ user: req.body,
        status:false })
    } catch (error) {
        console.error(error)
    }

}