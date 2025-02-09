import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADK_gWJ_2HQlDWCPPINK_TZADQcbgszvc",
  authDomain: "pundidigital-f2e27.firebaseapp.com",
  projectId: "pundidigital-f2e27",
  storageBucket: "pundidigital-f2e27.firebasestorage.app",
  messagingSenderId: "581086843111",
  appId: "1:581086843111:web:93f09b79b4d46d2f005242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };