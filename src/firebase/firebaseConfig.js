import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARxjCAI4vlWti87CtlcEccpdET8hP5zw4",
  authDomain: "soccer-training-app-8a86a.firebaseapp.com",
  projectId: "soccer-training-app-8a86a",
  storageBucket: "soccer-training-app-8a86a.firebasestorage.app",
  messagingSenderId: "504200821006",
  appId: "1:504200821006:web:9ce5396ad06e475cd4bf5f",
  measurementId: "G-GVFCNM6EMV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };