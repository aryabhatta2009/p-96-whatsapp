
const firebaseConfig = {
      apiKey: "AIzaSyA3S59yJOiG014AnH1vmIO1_Jqvd7cFnyU",
      authDomain: "kwitter-p-93.firebaseapp.com",
      databaseURL: "https://kwitter-p-93-default-rtdb.firebaseio.com",
      projectId: "kwitter-p-93",
      storageBucket: "kwitter-p-93.appspot.com",
      messagingSenderId: "344051862888",
      appId: "1:344051862888:web:a4edf5661b7a99ba69dadd"
    };
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        user_name=localStorage;
        room_name=localStorage; 
      //End code
      });});}
getData();
