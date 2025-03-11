import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBySBD69aYpBzGVjVjpZ_Ua1Xmu5vNmkJ0",
  authDomain: "info340cwinter25.firebaseapp.com",
  databaseURL: "https://info340cwinter25-default-rtdb.firebaseio.com",
  projectId: "info340cwinter25",
  storageBucket: "info340cwinter25.firebasestorage.app",
  messagingSenderId: "306863158198",
  appId: "1:306863158198:web:2855336e2b81e655748717"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);