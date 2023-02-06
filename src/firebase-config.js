import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCt6QOvgalkOVwTkCG4NMMXocg1D_btvVs",
    authDomain: "classes-a5d66.firebaseapp.com",
    projectId: "classes-a5d66",
    storageBucket: "classes-a5d66.appspot.com",
    messagingSenderId: "415040235654",
    appId: "1:415040235654:web:894407ec432915eac6c907",
    measurementId: "G-K4DNPSCMX0"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth();