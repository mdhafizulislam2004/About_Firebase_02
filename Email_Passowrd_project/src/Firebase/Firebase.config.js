// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf4Hwt24xiLEsL3QrBG3ofhVMHBSV_mHQ",
  authDomain: "email-password-auth-e439f.firebaseapp.com",
  projectId: "email-password-auth-e439f",
  storageBucket: "email-password-auth-e439f.firebasestorage.app",
  messagingSenderId: "861243943173",
  appId: "1:861243943173:web:4e62b3ed4c6ea657746f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);