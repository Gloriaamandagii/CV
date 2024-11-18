// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn3iG8XYsbRmQwuM8fHwRe7EhY4KCob1Q",
  authDomain: "my-cv-9f2dd.firebaseapp.com",
  projectId: "my-cv-9f2dd",
  storageBucket: "my-cv-9f2dd.firebasestorage.app",
  messagingSenderId: "13160788658",
  appId: "1:13160788658:web:dd910111620cbe7e2b4fab",
  databaseURL: "https://my-cv-9f2dd-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
