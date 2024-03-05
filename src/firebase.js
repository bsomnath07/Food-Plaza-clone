// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3TF3EbLNlsUAM44KX0az5hS5WjQBIosE",
  authDomain: "foodplaza-delivery-app.firebaseapp.com",
  projectId: "foodplaza-delivery-app",
  storageBucket: "foodplaza-delivery-app.appspot.com",
  messagingSenderId: "1058724131794",
  appId: "1:1058724131794:web:b0982457e71b059b0ece0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
