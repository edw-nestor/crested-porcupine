Contacts = new Mongo.Collection('contacts');
Reviews = new Mongo.Collection('reviews');
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
  },

  'reviews.insert' (name, location, review) {
    Reviews.insert({
      name,
      location,
      review,
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