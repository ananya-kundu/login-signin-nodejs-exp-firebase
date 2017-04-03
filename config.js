
  // Initialize Firebase
  var firebase=require('firebase');
  var config = {
    apiKey: "AIzaSyBwIqZsfg-hhCKczcEPKJDTf_wXFRPbzvk",
    authDomain: "login-signin-node-express.firebaseapp.com",
    databaseURL: "https://login-signin-node-express.firebaseio.com",
    projectId: "login-signin-node-express",
    storageBucket: "login-signin-node-express.appspot.com",
    messagingSenderId: "640210133492"
  };
  var firebase=firebase.initializeApp(config);

module.exports = firebase;
