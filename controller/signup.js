var express = require('express'),
	app = express(),
	router = express.Router(),
	signup = require('../model/signup');
	var validator = require('express-validator');
	router.use(validator());
  signupObj = new signup();
  console.log("signupObj",signupObj);
  router.post('/signup', function(req,res){

    try {
			var email = req.body.email;
			var password = req.body.password;

			var userData = {
												 email : email,
												 password :  password,
									 };
									 console.log("I am user data",userData);
      if(req.body.email === undefined || req.body.password === undefined || req.body.email === null || req.body.password === null)
			{
           res.send({"status":false,"message":"signup error"});
      }
			else
			{
					req.checkBody("email", "Enter a valid email address.").isEmail();
					req.checkBody("password", "Enter a valid password").optional().matches(/^[A-Za-z]+$/);
					var errors = req.validationErrors();
					if (errors) {
						res.send(errors);
						return;
					}
         	  signupObj.saveData(userData);
           	res.send({"status":true,"message":"Successfully Signup"});
         }
     }
     catch (e){
         res.send({"status":false,"message":"server error...!!!"});
     }
 	});
 module.exports = router;
