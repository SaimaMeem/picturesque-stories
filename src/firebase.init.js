// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPtvKyQR4h0SKPAGdZ5TxKQK0b2OnxIiE",
    authDomain: "picturesque-stories.firebaseapp.com",
    projectId: "picturesque-stories",
    storageBucket: "picturesque-stories.appspot.com",
    messagingSenderId: "207228798751",
    appId: "1:207228798751:web:a442ab796ebc912efed22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;