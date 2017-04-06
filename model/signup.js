var firebase = require('../config.js'),
  usersRef = firebase.database().ref("users");

function signupObj() {
  // return;
}

signupObj.prototype.saveData = function(userData) {

  var email = userData.email;
  var password = userData.password;
  console.log(email);
  console.log(password);
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

        // console.log(error.code);
        // console.log(error.message);
      });
}

module.exports = signupObj;
