// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZZgMAni_Nqh-lgDAtnp67xGukVyxdNRk",
  authDomain: "crwn-clothing-db-da483.firebaseapp.com",
  projectId: "crwn-clothing-db-da483",
  storageBucket: "crwn-clothing-db-da483.appspot.com",
  messagingSenderId: "7940974244",
  appId: "1:7940974244:web:7558afd2d9a36738e4e831",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
