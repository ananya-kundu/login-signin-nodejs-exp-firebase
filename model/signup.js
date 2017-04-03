
  var	firebase = require('../config.js'),
  	usersRef = firebase.database().ref("users");

function signupObj(){
	// return;
}

signupObj.prototype.saveData= function(userData){
  // console.log(saveUser);

      var email = userData.email;
      var password = userData.password;

      

      firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error) {
         console.log(error.code);
         console.log(error.message);
      });
}
module.exports = signupObj;
