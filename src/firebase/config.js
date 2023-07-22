// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBxwje57u7CBJqf8cRjbJX6s7L7pv-WdtA",
  authDomain: "rsshop-6b95a.firebaseapp.com",
  projectId: "rsshop-6b95a",
  storageBucket: "rsshop-6b95a.appspot.com",
  messagingSenderId: "996519489799",
  appId: "1:996519489799:web:f2ed7890880216d4c595a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;