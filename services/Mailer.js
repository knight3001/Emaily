const keys = require("../config/keys");
const Mailgun = require("mailgun-js")({
  apiKey: keys.mailGunApiKey,
  domain: keys.mailGunDomain,
});

class MailgunMailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: "knight3001@gmail.com",
      to: this.formatAddresses(recipients),
      subject,
      text: content,
      html: content,
    };
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }

  async send() {
    const resp = await Mailgun.messages().send(this.data);
    return resp;
  }
}

module.exports = MailgunMailer;
