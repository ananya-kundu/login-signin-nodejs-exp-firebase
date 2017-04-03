var express = require('express'),
app = express(),
	router = express.Router(),
	login = require('../model/login');
  loginObj = new login();
  console.log("loginObj",loginObj);

  router.post('/login', function(req,res){

    try
    {
      var loginUserData = {
                         email : req.body.email,
                         password : req.body.password,
                   };
      if(!loginObj.isValidation(loginUserData)) {
         res.send({"status":false,"message":"login unsuccessfull"});
       }else{

              loginObj.loginCheck(loginUserData);
              res.send({"status":true,"message":"Login Successfull"});
            }
    } catch (e)
    {

    }
    	});
    module.exports = router;
