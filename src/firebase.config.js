// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQkjwVdDqMdJUV4T5_bbzJ1duPDJJqIj4",
  authDomain: "partyapp-f677b.firebaseapp.com",
  projectId: "partyapp-f677b",
  storageBucket: "partyapp-f677b.appspot.com",
  messagingSenderId: "287602082120",
  appId: "1:287602082120:web:4fb7c6740e26ea442ff37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();