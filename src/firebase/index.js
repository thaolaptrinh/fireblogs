import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnqPcw5Rt1pfPHdVUrOdoSFUY6nJGefeY",
  authDomain: "fireblogs-2f3c0.firebaseapp.com",
  projectId: "fireblogs-2f3c0",
  storageBucket: "fireblogs-2f3c0.appspot.com",
  messagingSenderId: "542646906867",
  appId: "1:542646906867:web:74cd99f5892544e9336c86",
  measurementId: "G-L1XVBQQTC9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const timestamp = firebase.firestore.FieldValue.severTimestamp;

export { timestamp };
export default firebase.firestore();
