// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqW73KiOHD2ERtwtqCStNBzh8MN4VNQnQ",
  authDomain: "ami-education-fb684.firebaseapp.com",
  projectId: "ami-education-fb684",
  storageBucket: "ami-education-fb684.appspot.com",
  messagingSenderId: "460571631120",
  appId: "1:460571631120:web:75b919f0d1838a1360b495",
  measurementId: "G-QTQHZDMGT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);