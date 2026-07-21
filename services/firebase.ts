import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADStElc1s8NeNQKQNESggOnqycy9dkcLs",
  authDomain: "tuljaramchickenapp.firebaseapp.com",
  projectId: "tuljaramchickenapp",
  storageBucket: "tuljaramchickenapp.firebasestorage.app",
  messagingSenderId: "935191770424",
  appId: "1:935191770424:web:24c27105bffefa751bbdcd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);