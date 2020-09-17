import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnd00COsuuRCu9iWNKR01iloBJ3Sc8r18",
  authDomain: "crwn-db-64cbb.firebaseapp.com",
  databaseURL: "https://crwn-db-64cbb.firebaseio.com",
  projectId: "crwn-db-64cbb",
  storageBucket: "crwn-db-64cbb.appspot.com",
  messagingSenderId: "655050722237",
  appId: "1:655050722237:web:c38c0e698ee59d473d20d4",
  measurementId: "G-16M7LTXQK6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
