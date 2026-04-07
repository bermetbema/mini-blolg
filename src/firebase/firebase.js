// const firebaseConfig = {

//   apiKey: "AIzaSyBhiylvw0s__RQgwiQmleTD0gFUjAe6a20",

//   authDomain: "mini-blog-d0c9d.firebaseapp.com",

//   projectId: "mini-blog-d0c9d",

//   storageBucket: "mini-blog-d0c9d.firebasestorage.app",

//   messagingSenderId: "1013235285542",

//   appId: "1:1013235285542:web:5c9589c8825f62726070e7",

//   measurementId: "G-MQ83B967LF"

// };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "СЕНИН KEY",
  authDomain: "СЕНИН DOMAIN",
  projectId: "СЕНИН ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
