 var	firebase = require('../config.js'),
  ref = firebase.database().ref();

   function loginObj(){

    }
   loginObj.prototype.loginCheck= function(userData,cb){
       var email = userData.email;
       var password = userData.password;
     firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        if(error){
            // console.log("unsuccess message");
            cb(error,null);
        }
     }).then(function (data) {
      			if (data){
              cb(null,{success: true, message: 'success'});
            }
      		});
   }

 module.exports =loginObj;
