import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86oVgbEMRw2a6K9mcUlFT3rW_T5WtQj0",
  authDomain: "coderhouse-58180-d944e.firebaseapp.com",
  projectId: "coderhouse-58180-d944e",
  storageBucket: "coderhouse-58180-d944e.appspot.com",
  messagingSenderId: "867653219876",
  appId: "1:867653219876:web:87157c8ef837613a044ab1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
