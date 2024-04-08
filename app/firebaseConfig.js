// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOa8gLKrCFm7dZQYE_lIww02ZALd6BLE0",
  authDomain: "book-marketplace-website.firebaseapp.com",
  projectId: "book-marketplace-website",
  storageBucket: "book-marketplace-website.appspot.com",
  messagingSenderId: "160086574117",
  appId: "1:160086574117:web:82438b38bf37d54247abcc",
  measurementId: "G-XGKY9TTTXC",
  databaseURL: "https://book-marketplace-website-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default firebaseConfig;
