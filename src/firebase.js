
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";

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
const firestore = getFirestore(app);
