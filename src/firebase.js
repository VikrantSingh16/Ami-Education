// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTQXpFS3MmBapdKZ_lUMj2pxFi-B5fr-A",
  authDomain: "ami-education-f44a7.firebaseapp.com",
  projectId: "ami-education-f44a7",
  storageBucket: "ami-education-f44a7.appspot.com",
  messagingSenderId: "777432773103",
  appId: "1:777432773103:web:4c25d9a35740e79b6b061a",
  measurementId: "G-Q9075JQ0S7"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = getAuth();
