var firebaseConfig = {
      apiKey: "AIzaSyBUhyjPEVEy7U6IpbPj1CNCfonMXKKbKCc",
      authDomain: "project-93-to-97.firebaseapp.com",
      databaseURL: "https://project-93-to-97-default-rtdb.firebaseio.com",
      projectId: "project-93-to-97",
      storageBucket: "project-93-to-97.appspot.com",
      messagingSenderId: "77990633500",
      appId: "1:77990633500:web:0f7b6ee995e30833f47fd9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
naming = localStorage.getItem("room_namers");

function send(){
      variable = document.getElementById("msg").value
      firebase.database().ref(naming).push({
            name: username , message:variable , like: 0
      });
      document.getElementById("msg").value = "";
}

function loggingouttanowhere(){
      localStorage.removeItem("username");
      localStorage.removeItem("room_namers");
      window.location = "index.html"; 
}

function getData() {
      firebase.database().ref("/" + naming).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;



                        //Start code



                        //End code
                  }
            });
      });
}
getData();