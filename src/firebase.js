import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlSLygfu32VWUaSKUZe1XwZUrsl8CJ4dE",
  authDomain: "dashboard-2a9c6.firebaseapp.com",
  projectId: "dashboard-2a9c6",
  storageBucket: "dashboard-2a9c6.appspot.com",
  messagingSenderId: "981923185913",
  appId: "1:981923185913:web:8f63f71b5b7fdbde8c8e28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
