import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1vbd3bdSgqoc_Xqa5b7yyivkOKiReeKA",
  authDomain: "portfolio1-d8d73.firebaseapp.com",
  projectId: "portfolio1-d8d73",
  storageBucket: "portfolio1-d8d73.appspot.com",
  messagingSenderId: "975219836733",
  appId: "1:975219836733:web:a2e62bdb6f58fc09182754",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
