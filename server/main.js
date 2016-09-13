Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://edw.nestor%40gmail.com:wmsal304@smtp.gmail.com:465';
});



Meteor.publish('contacts', function contactsPublication() {
  return Contacts.find();
});

Meteor.publish('images', function contactsPublication() {
  return Images.find();
});

// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});