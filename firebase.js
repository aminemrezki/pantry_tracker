// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD_WVicH6n49p4Z3Ei8HZVcNnN7orZ0T4",
  authDomain: "inventory-management-12831.firebaseapp.com",
  projectId: "inventory-management-12831",
  storageBucket: "inventory-management-12831.appspot.com",
  messagingSenderId: "677763625391",
  appId: "1:677763625391:web:22d2f59559f1df7aa9bf5a",
  measurementId: "G-TM7YJZVRRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}