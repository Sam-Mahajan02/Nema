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
  var data;



 function fetchData(){
  let userId=0;
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      data=snapshot.val();
      console.log(data);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
 }
 console.log(data);
 let getLocationBtn=document.getElementById('getData');
 getLocationBtn.addEventListener("click",fetchData);

 