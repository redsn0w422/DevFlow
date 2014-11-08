
Router.route('/', function () {
  this.render('Main');
});


Router.route('/login', function () {
  this.render('Login');
});

Router.route('/signup', function () {
  this.render('Signup');
});


Router.route('/profile', function () {
  this.render('Profile');
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  // Accounts.onCreateUser(function(options, user){
  //   // define all of the variables for the user
  // });

  Meteor.publish("userData", function() {
    return Meteor.user.find();
  });
}
