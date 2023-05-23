// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoVdqquDvLgLZv_y7jp9iGwAPDvdGblU8",
  authDomain: "toys-beast.firebaseapp.com",
  projectId: "toys-beast",
  storageBucket: "toys-beast.appspot.com",
  messagingSenderId: "892685880544",
  appId: "1:892685880544:web:f3acb05bb625d82d1b5485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;