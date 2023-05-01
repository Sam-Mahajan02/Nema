 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
 import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBL_fksGc05jW2zeJd-k8ks686uUTUAVsM",
   authDomain: "capstone-nema.firebaseapp.com",
   databaseURL: "https://capstone-nema-default-rtdb.firebaseio.com",
   projectId: "capstone-nema",
   storageBucket: "capstone-nema.appspot.com",
   messagingSenderId: "785372576374",
   appId: "1:785372576374:web:90362163160c8c33793d57"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
//  const database= getDatabase(app);

let latitude=0;
let longitude=0;

const successCallback = (position) => {
    latitude=+position.coords.latitude; 
    longitude=+position.coords.longitude;
    writeUserData(1,'sam',latitude,longitude);
    writeUserData(2,'nema',latitude,longitude);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
  };

function sendUserLocation(){
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback,options);
}


// // Function to write data to the Firebase database
// function writeData(latitude, longitude) {
//   const db = app.database();
//   db.ref('locations').push({
//     latitude: latitude,
//     longitude: longitude
//   });
// }

function writeUserData(userId, name, latitude,longitude) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      userLatitude: latitude,
      userLongitute : longitude
    });
  }


//   // Function to read data from the Firebase database
//   function readData() {
//     const db = firebase.database();
//     db.ref('locations').on('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         const childData = childSnapshot.val();
//         console.log(childData.latitude, childData.longitude);
//       });
//     });
//   }
  
  // Example usage
//   writeData(51.5074, 0.1278);
// Call the function to send latitude and longitude data
// sendLocation(37.7749, -122.4194); // San Francisco, CA

  
  


let btnLocation = document.getElementById('sendData');

btnLocation.addEventListener('click',sendUserLocation);
