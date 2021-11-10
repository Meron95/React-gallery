import firebase  from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /*----- you only need to paste your firebaseconfig here nothing else is needed */
  

};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore(app);
const projectStorage = firebase.storage(app);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timeStamp};