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
  // Accounts.onCreateUser(function(options, user){
  //   // define all of the variables for the user
  // });

  Meteor.publish("userData", function() {
    return Meteor.user.find();
  });
}
