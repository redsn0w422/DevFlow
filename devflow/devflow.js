classes = new Meteor.Collection("classes");
Meteor.methods({
  comment: function (comment_text, user_profile, user_property, time) {

  },
  addFav: function (name, fav_name) {
    var user = Meteor.users.findOne({'username': fav_name});
    var favList = user.fav_list;
    favList.push(name);
    Meteor.users.update({'username': fav_name}, {$set: {'fav_list': favList}});
  }
});

Router.route('/', function () {
  this.render('Main');
});

Router.route('/explore', function () {
    this.render('Explore');
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
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

}

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user){
    // define all of the variables for the user
    return user;
  });

  Meteor.publish("userData", function() {
    return Meteor.user.find();
  });

  Meteor.publish("comments", function() {
    return comments.find();
  });
}
