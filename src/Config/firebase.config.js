// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmX6axvwYYt9syzl46USAmRQTqRgowY4A",
  authDomain: "task-manager-7f1bb.firebaseapp.com",
  projectId: "task-manager-7f1bb",
  storageBucket: "task-manager-7f1bb.appspot.com",
  messagingSenderId: "906578819566",
  appId: "1:906578819566:web:ce0f1cf79624e14289f6ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth