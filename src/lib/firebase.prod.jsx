import 'firebase/firestore'
import 'firebase/auth' 
// import { initializeApp } from "firebase/app";
import { seedDatabase } from '../seed'
import {initializeApp}from 'firebase/app';

const config = {
    apiKey: "AIzaSyCpmCNRLfOvjQDO6KGIwkpsAzDoqHhld3k",
    authDomain: "netflix-f22b3.firebaseapp.com",
    projectId: "netflix-f22b3",
    storageBucket: "netflix-f22b3.appspot.com",
    messagingSenderId: "503372201733",
    appId: "1:503372201733:web:262037a41595566338416c"
  };
  
  // Initialize Firebase
const firebase = initializeApp(config);


  export { firebase };