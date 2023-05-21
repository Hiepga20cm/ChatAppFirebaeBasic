import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDVUkPMW9Q5sxgBK43xmnTJhN5IyjVOyZA",
  authDomain: "chat-app-359007.firebaseapp.com",
  projectId: "chat-app-359007",
  storageBucket: "chat-app-359007.appspot.com",
  messagingSenderId: "12782240243",
  appId: "1:12782240243:web:243d4a5700496637059286",
  measurementId: "G-GD86ZHZC85",
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
