Contacts = new Mongo.Collection('contacts');
// Images = new Mongo.Collection('images');

Meteor.methods({
  'contacts.insert' (name, phone, email, message) {
    Contacts.insert({
      name,
      phone,
      email,
      message,
      createdAt: new Date()
    });
  }
  // 'images.insert' (image) {
  //   Images.insert({
  //     image,
  //     createdAt: new Date()
  //   });
  // }
});