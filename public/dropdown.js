var displayName;
var email;
var uid;

$(document).ready(function(){
  $('#dropdownly').dropdown({
    on: 'hover',
    action: 'nothing'
  });
  $(".ui.sidebar").sidebar("attach events", "#toggleItem");
  console.log("dropdowned");
})
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      displayName = user.displayName;
      email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      uid = user.uid;
      var providerData = user.providerData;
      $("#username").text(displayName);
      console.log("user");
      // ...
    } else {
      // User is signed out.
      // ...
      window.location.replace("login.html");
    }
  });

function signOutFromGoogle () {
    $("#username").text("Signing out...");
    firebase.auth().signOut().then(function() {
        window.location.replace("login.html");
    }).catch(function(error) {

    });
}

function showModal() {
    $('.ui.modal').modal('show');
  }
  
  