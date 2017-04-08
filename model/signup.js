var firebase = require('../config.js'),
  usersRef = firebase.database().ref("users");

function signupObj() {
  this.saveData = function(userData) {

    var email = userData.email;
    var password = userData.password;
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

        });
  }
}
module.exports = signupObj;
