
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

Router.route('/explore', function () {
  this.render('Explore');
});

if (Meteor.isClient) {

}

if (Meteor.isServer) {
  // Accounts.onCreateUser(function(options, user){
  //   // define all of the variables for the user
  // });

  Meteor.publish("userData", function() {
    return Meteor.user.find();
  });
}
