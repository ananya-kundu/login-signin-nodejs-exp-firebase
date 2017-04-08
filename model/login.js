 var firebase = require('../config.js'),
   ref = firebase.database().ref();

 function loginObj() {
   this.loginCheck = function(userData, cb) {
     var email = userData.email;
     var password = userData.password;

     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       if (error) {
         cb(error, null);
       }
     }).then(function(data) {
       if (data) {
         var userinfo = data.email;
         cb(null, {
           success: true,
           message: userinfo
         });
       }
     });
   }
 }
 module.exports = loginObj;
