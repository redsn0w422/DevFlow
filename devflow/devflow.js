<<<<<<< Updated upstream
classes = new Meteor.Collection("classes");
Meteor.methods({
  addFav: function (name, fav_name) {
    var user = Meteor.users.findOne({'username': fav_name});
    var favList = user.fav_list;
    favList.push(name);
    Meteor.users.update({'username': fav_name}, {$set: {'fav_list': favList}});
  }
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);
=======
comments = new Meteor.Collection("comments");

Meteor.methods({
  comment: function (comment_text, user_profile, user_property, time) {

  },

>>>>>>> Stashed changes


});

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

    Template.menubar.events({
    'click #searchFilter': function () {
      Session.set("filterVal", $("#searchFilter").val());
    }
  });

    Template.menubar.events({
    'click #search' : function (event) {
      Session.set("filterVal", parseInt(Session.get("filterVal")) + 4);
    }
  });
}

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user){
    // define all of the variables for the user
  });

  Meteor.publish("userData", function() {
    return Meteor.user.find();
  });
}