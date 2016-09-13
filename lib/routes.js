Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/contact', function () {
  this.render('contact');
});
Router.route('/praise', function () {
  this.render('praise');
});
Router.route('/work', function () {
  this.render('work');
});

Router.route('/admin', {
  onBeforeAction: function () {
    if(!Meteor.userId()) {
      this.render('login');
    } else {
      this.render('admin');
    }
  }
});

Router.route('/falcondb', {
  onBeforeAction: function () {
    if(!Meteor.userId()) {
      this.render('login');
    } else {
      this.render('falcondb');
    }
  }
});

Router.route('/upload-images', {
  onBeforeAction: function () {
    if(!Meteor.userId()) {
      this.render('login');
    } else {
      this.render('upload-images');
    }
  }
});

Router.route('/eddies-contacts', {
  onBeforeAction: function () {
    if(!Meteor.userId()) {
      this.render('login');
    } else {
      this.render('contacts');
    }
  }
});



