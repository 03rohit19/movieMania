// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtPZsjV3nSJ60frr0Gms3KV0C_acsAiJw",
  authDomain: "video-app-7b5ee.firebaseapp.com",
  projectId: "video-app-7b5ee",
  storageBucket: "video-app-7b5ee.appspot.com",
  messagingSenderId: "1064251912342",
  appId: "1:1064251912342:web:6afc368b1f75c2aba212b7",
  measurementId: "G-Y95KG94DQ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();
