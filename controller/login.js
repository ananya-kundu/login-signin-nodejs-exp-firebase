var express = require('express'),
app = express(),
	router = express.Router();
	 loginObj = require('../model/login');
   login = new loginObj();
    console.log("loginObj",loginObj);
	var	firebase = require('../config.js');
	    ref = firebase.database().ref();

  router.post('/login', function(req,res){

				var email = req.body.email;
				var password = req.body.password;
				console.log(email);
				console.log(password);

				var data={
						email:email,
						password:password
				}
				login.loginCheck(data, function(err,result){
					if(err){
							res.send({"status": false,"message": error.message});					}
					else {
						 	res.send({"status": true,"message": "Successfully login"});
					}
	});
 });
	module.exports = router;
