// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqjqtdIgnjEdvf1kxYYeOg5BZRfkr4oTI",
  authDomain: "clever-bit-345819.firebaseapp.com",
  projectId: "clever-bit-345819",
  storageBucket: "clever-bit-345819.appspot.com",
  messagingSenderId: "631759453040",
  appId: "1:631759453040:web:2a899c2117d0491cb3adb5",
  measurementId: "G-8VBYJKH58Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth, db};