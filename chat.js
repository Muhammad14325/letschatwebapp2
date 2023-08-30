
var firebaseConfig = {
    apiKey: "AIzaSyATP_yRufXy_0DfYjPW5GVAHeLtv8MAR5Y",
    authDomain: "kwitter-f2951.firebaseapp.com",
    databaseURL: "https://kwitter-f2951-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2951",
    storageBucket: "kwitter-f2951.appspot.com",
    messagingSenderId: "944807724673",
    appId: "1:944807724673:web:f8aafe97c6fc78ed116f80"
  };
              

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



