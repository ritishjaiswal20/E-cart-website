import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDo8-5CZvJWgEqSHvlohJEpo1tGKkr8PdI",
    authDomain: "clone-da348.firebaseapp.com",
    projectId: "clone-da348",
    storageBucket: "clone-da348.appspot.com",
    messagingSenderId: "631728697739",
    appId: "1:631728697739:web:88dc25da7655d4c0b47f8e"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;