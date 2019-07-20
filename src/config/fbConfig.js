import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAYq7qTDI9zMQdRbQ62ht2QV1M3D6dQKsY",
    authDomain: "reactfirebase-b041a.firebaseapp.com",
    databaseURL: "https://reactfirebase-b041a.firebaseio.com",
    projectId: "reactfirebase-b041a",
    storageBucket: "",
    messagingSenderId: "619963614049",
    appId: "1:619963614049:web:0522b5178cc19016"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});
  export default firebase;