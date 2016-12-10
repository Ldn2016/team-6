$(document ).ready(function(){
  var accessToken;
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    getFriendInfo();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : 212599245854855,
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  accessToken = response.authResponse.accessToken;
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });

  /*
  var friendName = "Daniel James";
  FB.api(
    "/me/friends",
    function (response) {
    console.log(response && !response.error);
      if (response && !response.error) {
    console.log("JSON\nJSON\JSON!!!");
        console.log(JSON.stringify(response));
    console.log(response.data[0].name);
    var friendName = response.data[0].name;
    $("p").text(friendName);
      }
    else {
    $("p").text("Daniel James");
    }
    }
  */
  myFacebookLogin();
  }

  function myFacebookLogin() {
  FB.login(function(){
  // Note: The call will only work if you accept the permission request
  FB.api('/me/feed', 'post', {message: 'Hello, world!'});
  }, {scope: 'publish_actions, user_friends'});
  console.log("myFacebookLogin called");
  }

  function getFriendInfo() {
  var friendName = "Daniel James";
  var friendID = 1325628984153930;
  FB.api(
    "/me/friends",
    function (response) {
    console.log(response && !response.error);
      if (response && !response.error) {
    console.log("JSON\nJSON\JSON!!!");
        console.log(JSON.stringify(response));
    console.log(response.data[0].name);
    var friendName = response.data[0].name;
    var friendID = response.data[0].id;
    $("p").text(friendName);
      }
    else {
    $("p").text("Daniel James");
    }
    }
  );

  console.log("Picture api being called" + "/" + friendID + "/picture");
  FB.api(
    "/"+friendID+"/picture",
    function (response) {
      if (response && !response.error) {
    console.log("IMAGE: " + JSON.stringify(response));
        $("h2").text(response.data.url);
    $("img").attr("src",response.data.url);
      }
    }
  );

});
