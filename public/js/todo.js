$(document).ready(function() {
  $.ajax({
    url: "http://localhost:8081/session",
    datatype: "json",
    type: "GET",
    success: function(data) {
      if (data.session == true) {
        loginSuccessPage();
      }
    }
  });

  var User = function(email, password) {
    this.email = email;
    this.password = password;
  };

  // value takes by user
  $(document).ready(function() {
    $(document).on("click", "#signinBtn", function() {

      var email = $("#email").val();
      var password = $("#password").val();

      var userObj = new User(email, password);

      $.ajax({
        url: "http://localhost:8081/api/signup",
        datatype: "json",
        type: "POST",
        data: JSON.stringify(userObj),
        contentType: 'application/json',
        success: function(data) {
          $('span').remove();
          $("#signinBtn").after('<br><br><span>' + data.message + '</span>');
        }
      });
    });
  });

  $(document).ready(function() {
    $(document).on("click", "#fetchUser", function() {
      var email = $("#exampleInputEmaillog").val();
      var password = $("#loginPassword").val();

      var userNewObj = new User(email, password);

      $.ajax({
        url: "http://localhost:8081/api/login",
        datatype: "json",
        type: "POST",
        data: JSON.stringify(userNewObj),
        contentType: 'application/json',

        success: function(data) {
          if (data.status) {
            loginSuccessPage();
          } else {        
             welcomePage();
            console.log("login unsuccess");
          }
        }
      });
    });
  });

  function welcomePage() {
    $.ajax({
      url: "index.html",
      datatype: "text",
      type: "GET",
      success: function(res) {
        $("#body").html(res);
      }
    });

  }

  function loginSuccessPage() {
    $.ajax({
      url: "welcome.html",
      datatype: "text",
      type: "GET",
      success: function(res) {
        $("#body").html(res);
      }
    });
  }

  $(document).ready(function() {
    $(document).on("click", "#logOutId", function() {
      $.ajax({
        url: "http://localhost:8081/logout",
        datatype: "json",
        type: "GET",
        success: function(data) {
          if (data.status == false) {
            welcomePage();
          }
        }
      });
    });
  });
});
