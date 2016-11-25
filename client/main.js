// global helper for date formating
Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM-DD-YYYY');
});

Template.registerHelper('formatDateTime', function(date){
  return moment(date).format('MMM-DD-YYYY, h:mm:ss a');
});

// makes hambuger menu close after selecting a menu item
Template.header.events({ 
  click: function() {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a", null, function() {
      navMain.collapse('hide');
    });
  },
}); 

// validates phone numbers
Template.contact.onRendered( function() {
  $( ".contact-eddie" ).validate();
  jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
});

// sends email and inserts contact info into database
Template.contact.events({
  submit: function(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var phone = event.target.phone.value;
    var email = event.target.email.value;
    var message = event.target.textarea.value;
    var text = $('input#name').val();
    text = text + "\n" + $('input#phone').val();
    text = text + "\n" + $('input#email').val();
    text = text + "\n" + $('textarea#textarea').val();
    Meteor.call('sendEmail',
            'edw.nestor@gmail.com',
            'bob@example.com',
            'Hello EddiePaints.com',
             text);
             
    Meteor.call('contacts.insert', name, phone, email, message);        
    
    event.target.name.value = '';
    event.target.phone.value = '';
    event.target.email.value = '';
    event.target.textarea.value = '';
    
    alert("Thank you. Eddie will contact you shortly.");
  }
});

Template.praise.events({
  submit: function(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var location = event.target.location.value;
    var review = event.target.textarea.value;
    Meteor.call('reviews.insert', name, location, review);
    event.target.name.value = "";
    event.target.location.value = "";
    event.target.textarea.value = "";

    alert("Thank you for your time and effort.");
  }
});

Template.reviews_list.helpers({
  'reviews': function() {
    return Reviews.find().fetch().reverse();
  }
});


Template.admin.events({
  // route to admin locked, login to admin area
  'click #loginSubmit': function () {
     var username = $("#username").val();
     var password = $("#password").val();
     Meteor.loginWithPassword(username, password, function (error) {
       if (!error) {
         Router.go('/admin');
       } else {
         alert("Errrrrrrrrrooooooorrrrr");
       }
     });
   }
});

Template.contacts.helpers({
  'contacts': function () {
    return Contacts.find().fetch().reverse();
  }
});

// Template.upload-images.helpers({
//   'images': function () {
//     return Images.find().fetch().reverse();
//   }
// });

// Template.upload-images.events({
  
// });

Meteor.subscribe('contacts');
Meteor.subscribe('reviews');
// Meteor.subscribe('images');