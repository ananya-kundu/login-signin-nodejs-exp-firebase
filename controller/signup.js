var express = require('express'),
	app = express(),
	router = express.Router(),
	signup = require('../model/signup'),
  signupObj = new signup();
  console.log("signupObj",signupObj);
  router.post('/signup', function(req,res){
    try {
      if(req.body.email === undefined || req.body.password === undefined || req.body.email === null || req.body.password === null) {
           res.send({"status":false,"message":"signup error"});
      }else{
           var userData = {
                         		  email : req.body.email,
                         		  password : req.body.password,
 	                      };
            console.log("userData",userData);
         	  signupObj.saveData(userData);
           res.send({"status":true,"message":"Successfully Signup"});
         }
     }
     catch (e){
       console.log(e);
         res.send({"status":false,"message":"server error...!!!"});
     }
 	});
 module.exports = router;
