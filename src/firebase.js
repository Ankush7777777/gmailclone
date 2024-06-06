import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyCCxklo4ehV_I5NwZWRkDReg46I-3Rpo5A",
  // authDomain: "clone-6dd4f.firebaseapp.com",
  // projectId: "clone-6dd4f",
  // storageBucket: "clone-6dd4f.appspot.com",
  // messagingSenderId: "781876226205",
  // appId: "1:781876226205:web:0d4463c344d70c0994cc74",
  // measurementId: "G-ZT3MWT0RX8"
  apiKey: "AIzaSyBo0zV6NmAHxxNpt3ail3t5xXlM3ek8QgI",
  authDomain: "clone-yt-9134a.firebaseapp.com",
  projectId: "clone-yt-9134a",
  storageBucket: "clone-yt-9134a.appspot.com",
  messagingSenderId: "520771907426",
  appId: "1:520771907426:web:8f0a47b7df58f9d6bac63b",
  measurementId: "G-R8NDJL7TKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();