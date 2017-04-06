var User=function(email,password){

  this.email=email;
  this.password=password;

};
// value takes by user
$(document).ready(function(){
  $(document).on("click","#signinBtn",function(){

      var email=$("#email").val();
      console.log(email);
      var password=$("#password").val();
      console.log(password);

      var userObj = new User(email,password);
      console.log(userObj);

      $.ajax({
        url: "http://127.0.0.1:8081/api/signup",
        datatype:"json",
        type:"POST",
        data:JSON.stringify(userObj),
        contentType:'application/json',
        success: function(data){
          console.log(data);
          console.log("this is result");
          // alert("Registration Successfull..");
          $('span').remove();
          $("#signinBtn").after('<br><br><span>'+data.message+'</span>');
        }
      });
    });
});

 $(document).ready(function(){
  $(document).on("click","#fetchUser",function(){
    var email=$("#exampleInputEmaillog").val();
    console.log(email);
    var password=$("#loginPassword").val();
    console.log(password);

    var userNewObj=new User(email,password);
    // userNewObj["email"] = email;
    // userNewObj["password"] = password;
    console.log(userNewObj);

    $.ajax({
       url: "http://127.0.0.1:8081/api/login",
       datatype:"json",
       type:"POST",
        data:JSON.stringify(userNewObj),
      // data : userNewObj,
       contentType:'application/json',
      //  var rslt = false;

      success: function(data){
        console.log("this is result",data);
        for(var i in data){
            console.log(data[i]);
            if(data[i].firstName==$("#exampleInputEmaillog").val() && data[i].password==$("#loginPassword").val() ){
                  //  console.log("hiiiiiiiii.........");
                   alert("Login Successfull..");
              }
              // else{
              //     alert("log in unsccess..PLease provide valid user-name and password");
              // }
          }
        }
    });
  });
});
