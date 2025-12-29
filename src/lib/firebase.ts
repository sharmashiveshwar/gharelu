import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCq8geiORbXm-qZdP0okR0b3ZkaKjXeDv8",
  authDomain: "gharelu-shop.firebaseapp.com",
  projectId: "gharelu-shop",
  storageBucket: "gharelu-shop.firebasestorage.app",
  messagingSenderId: "198469146884",
  appId: "1:198469146884:web:82d20311d356933695d851",
  measurementId: "G-2NV1WHC7RV"
};

// Initialize Firebase (prevents re-initialization errors in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the database connection
export const db = getFirestore(app);