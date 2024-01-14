import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB86oVgbEMRw2a6K9mcUlFT3rW_T5WtQj0",
  authDomain: "coderhouse-58180-d944e.firebaseapp.com",
  projectId: "coderhouse-58180-d944e",
  storageBucket: "coderhouse-58180-d944e.appspot.com",
  messagingSenderId: "867653219876",
  appId: "1:867653219876:web:87157c8ef837613a044ab1"
};

const app= initializeApp (firebaseConfig);
export const db = getFirestore(app);