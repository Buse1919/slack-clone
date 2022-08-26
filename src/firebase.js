import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAQQd831VxtdntopuPKXm2HPUFtNlwyaog",
    authDomain: "slack-clone-8c9a6.firebaseapp.com",
    projectId: "slack-clone-8c9a6",
    storageBucket: "slack-clone-8c9a6.appspot.com",
    messagingSenderId: "1036798660409",
    appId: "1:1036798660409:web:a2508a963f7223887b22e8",
    measurementId: "G-X1555XXY2P"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;