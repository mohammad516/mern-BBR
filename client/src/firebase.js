// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-bbr.firebaseapp.com",
  projectId: "mern-bbr",
  storageBucket: "mern-bbr.appspot.com",
  messagingSenderId: "452407307934",
  appId: "1:452407307934:web:40e1bed3634addc367d58f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);