// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASQ7M-lpnCmsz3s7c8V2mHJujn8G2-wvo",
  authDomain: "moviegpt-75b3a.firebaseapp.com",
  projectId: "moviegpt-75b3a",
  storageBucket: "moviegpt-75b3a.firebasestorage.app",
  messagingSenderId: "491533178954",
  appId: "1:491533178954:web:7af7fdd5dc396060692eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();