// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTBDgflziJDSzM3nlu0sAzU0ktivWxmo",
  authDomain: "codefellassih-a3519.firebaseapp.com",
  projectId: "codefellassih-a3519",
  storageBucket: "codefellassih-a3519.appspot.com",
  messagingSenderId: "6844598659",
  appId: "1:6844598659:web:6fa5713aa10ac42f5b8eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const agenciesRef = collection(db, "Rescue_Agencies");
export const alertsRef = collection(db, "Alerts");


export { auth, app, db, storage };