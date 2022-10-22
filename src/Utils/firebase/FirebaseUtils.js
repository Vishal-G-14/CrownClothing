import { initializeApp } from "firebase/app";

import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9QLm8QVsPjqtene2nf1Airi5aXzVZaMI",
  authDomain: "crwn-clothing-db-c3ca7.firebaseapp.com",
  projectId: "crwn-clothing-db-c3ca7",
  storageBucket: "crwn-clothing-db-c3ca7.appspot.com",
  messagingSenderId: "884220585738",
  appId: "1:884220585738:web:0e39e622cd09dc339abcf3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Create a provider for GoogleAutProvider

const googleProvider = new GoogleAuthProvider();

// Set Custom providers for Providers
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// initialize auth - which will have the Authentication details
export const auth = getAuth();

// initialize Popup signin
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// FireStore DB Initialization
export const db = getFirestore();

// Crete User Document in Firebase based on Auth
export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = await doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  // get the data from UserDoc

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // If the user does not exist in the firestore

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("This is a error message", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
