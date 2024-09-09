// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUGKbrcrj6vife6Hookfuu2pypb4aq2xs",
  authDomain: "twitter-clone-cf7c2.firebaseapp.com",
  projectId: "twitter-clone-cf7c2",
  storageBucket: "twitter-clone-cf7c2.appspot.com",
  messagingSenderId: "967945662547",
  appId: "1:967945662547:web:6b48c21782690fdf0a16a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
