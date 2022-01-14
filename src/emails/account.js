const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, name) => {
  sgMail.send({
    to: email,
    from: "4m4rarts@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    html: "<h1>Hello World</h1>",
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "4m4rarts@gmail.com",
    subject: "Sorry to see you goo",
    text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    html: "<h1>See You Agains</h1>",
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
