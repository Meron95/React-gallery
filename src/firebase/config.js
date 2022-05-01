import firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSmuainqyZ5k2Mmr05V1SUPS5ehUx8eEs",
  authDomain: "epic-fire-b192c.firebaseapp.com",
  projectId: "epic-fire-b192c",
  storageBucket: "epic-fire-b192c.appspot.com",
  messagingSenderId: "519082783542",
  appId: "1:519082783542:web:0502bed09dab5107907997"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore(app);
const projectStorage = firebase.storage(app);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp};