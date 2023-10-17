// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC9kP4LPoY7ZscwWcbN2L77q3XKZjV6vLY",
    authDomain: "lets-chat-app-f031f.firebaseapp.com",
    databaseURL: "https://lets-chat-app-f031f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-f031f",
    storageBucket: "lets-chat-app-f031f.appspot.com",
    messagingSenderId: "209697985228",
    appId: "1:209697985228:web:25a0fad7acd983a8c22869"
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
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



