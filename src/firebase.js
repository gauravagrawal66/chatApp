import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByfQwqLvlgNDzmNvy7SFMl0Jn6cd8kp4k",
  authDomain: "mychat-cb4b4.firebaseapp.com",
  projectId: "mychat-cb4b4",
  storageBucket: "mychat-cb4b4.appspot.com",
  messagingSenderId: "1738699790",
  appId: "1:1738699790:web:349a897bb008ac7802b85f",
  measurementId: "G-3R30WYFX8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
