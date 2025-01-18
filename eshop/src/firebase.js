// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChpY9gcrLPz_C0QXWn_sjNBDdQyOzW84E",
    authDomain: "eshop-c4d5e.firebaseapp.com",
    projectId: "eshop-c4d5e",
    storageBucket: "eshop-c4d5e.appspot.com", // Corrected storage bucket URL
    messagingSenderId: "655096365436",
    appId: "1:655096365436:web:841ddb48b0000d92a524f9",
    measurementId: "G-MVF37JQ06X"
};

const firebaseApp = initializeApp(firebaseConfig); // Updated initialization

const db = getFirestore(firebaseApp); // Updated Firestore initialization

const auth = getAuth(firebaseApp); // Updated Auth initialization

export { db, auth };