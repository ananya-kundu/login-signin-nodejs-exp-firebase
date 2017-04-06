var firebase = require("firebase");
// var Regex = require("regex");
// var regex = new Regex('/^[A-Za-z]+$/');
var config = require("./app/config");
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
var validator = require('express-validator')
firebase.initializeApp(config);
var bodyParser = require('body-parser');
//Http  server but framework  node js i will create http server (web services,REST API)
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(validator());
app.use(bodyParser.json())

var ref = firebase.database().ref();
var port = 8088;
//var bodyParser = require("body-parser");
//app.use(bodyParser.json())
// app.post("/login",function (request,response) {
// //request.body Post Call  use to Bind Body Data
// try {
//   console.log(request.body.username);
// if(request.body.username==="admin" && request.body.password==="admin")
// {
//   response.send({"status":true,"message":"user Login Successfull"})
// }else {
//   response.send({"status":false,"message":"Invalid User"});
// }
// } catch (e) {
//
// response.send({"status":false,"message":"SERVER ERROR"});
// }
// });
app.post("/login", function(request, response) {
    try {
      request.checkBody("email", "Enter a valid email address.").isEmail();
      request.checkBody("password","Enter a valid password").optional().matches(/^[A-Za-z]+$/);

      var errors = request.validationErrors();
              if (errors) {
                  console.log(errors);
                  response.send(errors);
                  return;
              } else {
        var email = request.body.email;
        var password = request.body.password;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          if(error)
            response.send({
                "status": false,
                "message": error.message
            });
            // response.send({"status":true,"message":"registration unsucessful"});
  }).then(function (data) {
    if (data)
    response.send({
        "status": true,
        "message": "Successfully login"
    });
  });
  }
    } catch (e) {
        response.send({
            "status": false,
            "message": "server error"
        });
    }
});

app.post("/signup", function(request, response) {
            //request.body Post Call  use to Bind Body Data
            var flag=0;
            try {
                // ref.child(request.body.username).set({
                //   name:request.body.username,
                //   password:request.body.password
                //     });
                //request.checkBody("request.body.email", "Enter a valid email address.").isEmail();
                var email = request.body.email;
                var password = request.body.password;

                request.checkBody("email", "Enter a valid email address.").isEmail();
                request.checkBody("password","Enter a valid password").optional().matches(/^[A-Za-z]+$/);
                var errors = request.validationErrors();
                        if (errors) {
                            response.send(errors);
                            return;
                        } else {
                            console.log("auth");
                            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                              if(error)
                                response.send({
                                    "status": false,
                                    "message": error.message
                                });
                                // response.send({"status":true,"message":"registration unsucessful"});
                      }).then(function (data) {
                        if (data)
                        response.send({
                            "status": true,
                            "message": "Successfully signup"
                        });

                      });
                        // if(flag==1)
                        // {
                        //   console.log("registration unsucessful");
                        //   response.send({
                        //       "status": true,
                        //       "message": "registration unsucessful"
                        //   });
                        // }
                        //
                        //   console.log("regs Successfull");
                        // response.send({
                        //     "status": true,
                        //     "message": "registration Success"
                        // });
                        }

                    } catch (e) {
                        console.log(e);
                        response.send({
                            "status": false,
                            "message": "SERVER ERROR"
                        });
                    }
                });
            // const http = require('http');
            // http.createServer(function (request,response) {
            //
            // })
            var server = app.listen(port, function() {
                console.log("server port %d has started", port);
            })
