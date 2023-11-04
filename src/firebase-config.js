// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYTejELeW2Gtd1H6-zUQYkKPJ9es5NCeQ",
  authDomain: "groceryapp-3faf5.firebaseapp.com",
  projectId: "groceryapp-3faf5",
  storageBucket: "groceryapp-3faf5.appspot.com",
  messagingSenderId: "946978926785",
  appId: "1:946978926785:web:8988b8515e20d9f68ce440",
  measurementId: "G-G42JWH1FTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);