// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aitripplanner-4d0fa.firebaseapp.com",
  projectId: "aitripplanner-4d0fa",
  storageBucket: "aitripplanner-4d0fa.firebasestorage.app",
  messagingSenderId: "1070205440366",
  appId: "1:1070205440366:web:7690adcf6544430b58f17f",
  measurementId: "G-Z545PGTXGS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);