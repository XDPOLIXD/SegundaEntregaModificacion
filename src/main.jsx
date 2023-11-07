import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuwFUfUDdX44BNdlBsJNKLxRonf23A3Po",
  authDomain: "proyectofones.firebaseapp.com",
  projectId: "proyectofones",
  storageBucket: "proyectofones.appspot.com",
  messagingSenderId: "770355932785",
  appId: "1:770355932785:web:1ad2ee46c725ead8eb75d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)