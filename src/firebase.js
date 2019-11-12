import * as firebase from 'firebase';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6f4h7ay4JFyP5JOKdskaDokupuWVjD5U",
    authDomain: "diary-462b0.firebaseapp.com",
    databaseURL: "https://diary-462b0.firebaseio.com",
    projectId: "diary-462b0",
    storageBucket: "diary-462b0.appspot.com",
    messagingSenderId: "917070486416",
    appId: "1:917070486416:web:e5fe0ada6b5c4480b43115",
    measurementId: "G-MG8NB4DN2P"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export  const database=firebase.database().ref('/notes')