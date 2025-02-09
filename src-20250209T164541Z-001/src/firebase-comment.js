import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADK_gWJ_2HQlDWCPPINK_TZADQcbgszvc",
    authDomain: "pundidigital-f2e27.firebaseapp.com",
    projectId: "pundidigital-f2e27",
    storageBucket: "pundidigital-f2e27.firebasestorage.app",
    messagingSenderId: "581086843111",
    appId: "1:581086843111:web:93f09b79b4d46d2f005242"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };