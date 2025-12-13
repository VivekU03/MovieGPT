// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1yNlhkiFwzox4hsVA6g9HPLkwpi7QMv0",
  authDomain: "netflixgpt-73a33.firebaseapp.com",
  projectId: "netflixgpt-73a33",
  storageBucket: "netflixgpt-73a33.firebasestorage.app",
  messagingSenderId: "238524158218",
  appId: "1:238524158218:web:0d5e75093dc6649595eaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();