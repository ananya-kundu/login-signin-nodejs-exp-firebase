var	firebase = require('../config.js'),
   ref = firebase.database().ref();

   function loginObj(){

   }

   loginObj.prototype.loginCheck= function(userData){
     var email = userData.email;
     var password = userData.password;

     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       console.log(error.code);
       console.log(error.message);
     });
   }


loginObj.prototype.isValidation = function(userData){
  var email = userData.email;
  var password = userData.password;
  if(email==undefined||password==undefined||email==null||password==null){
    console.log("invalid mail-id");
    return false;
  }
  // else if (email == ""||password == ""||(email == "" && password == "")) {
  //   return false;
  // }
  return true;
}


module.exports =loginObj;
