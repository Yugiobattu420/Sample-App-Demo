// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2Y-vvfAStImLipAWuppvjVM68XmP9JOY",
    authDomain: "sign-in-react-test.firebaseapp.com",
    projectId: "sign-in-react-test",
    storageBucket: "sign-in-react-test.appspot.com",
    messagingSenderId: "944824411388",
    appId: "1:944824411388:web:feaeaed102db4fe7826379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);