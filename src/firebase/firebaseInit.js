import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBnqPcw5Rt1pfPHdVUrOdoSFUY6nJGefeY",
  authDomain: "fireblogs-2f3c0.firebaseapp.com",
  projectId: "fireblogs-2f3c0",
  storageBucket: "fireblogs-2f3c0.appspot.com",
  messagingSenderId: "542646906867",
  appId: "1:542646906867:web:74cd99f5892544e9336c86",
  measurementId: "G-L1XVBQQTC9",
};

const firebaseApp = initializeApp(firebaseConfig);

const timestamp = serverTimestamp();

// Get Firestore instance
const firestore = getFirestore(firebaseApp);

export { timestamp, firestore };
export default firebaseApp;
