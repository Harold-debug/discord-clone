import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3KBgTtVGfWBW4erm27idbcxZJBIdURck",
  authDomain: "discord-clone-a9bb6.firebaseapp.com",
  projectId: "discord-clone-a9bb6",
  storageBucket: "discord-clone-a9bb6.appspot.com",
  messagingSenderId: "744454386144",
  appId: "1:744454386144:web:651188dacb4dc619487b85",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
