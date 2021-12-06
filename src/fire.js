import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFrrg3Adl1YfihNa-mdWpmhSqCKNybwnY",
  authDomain: "login-1427c.firebaseapp.com",
  projectId: "login-1427c",
  storageBucket: "login-1427c.appspot.com",
  messagingSenderId: "549478697752",
  appId: "1:549478697752:web:6eb85d2d565beaa807ac6d"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;