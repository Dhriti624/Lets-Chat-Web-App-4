user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyC_xCKpOmiRl0AO0S92pspojSPZE4l5IOE",
  authDomain: "kwitter-f096c.firebaseapp.com",
  databaseURL: "https://kwitter-f096c-default-rtdb.firebaseio.com/",
  projectId: "kwitter-f096c",
  storageBucket: "kwitter-f096c.appspot.com",
  messagingSenderId: "325886081588",
  appId: "1:325886081588:web:cc5b5c709ecd92ce4ba861"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    
    document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

