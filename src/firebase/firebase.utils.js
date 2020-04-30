import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3m1hlC6LvJCcV-_Vb6V6enaEPpzTCSZg",
  authDomain: "crwn-db-6788e.firebaseapp.com",
  databaseURL: "https://crwn-db-6788e.firebaseio.com",
  projectId: "crwn-db-6788e",
  storageBucket: "crwn-db-6788e.appspot.com",
  messagingSenderId: "73537630274",
  appId: "1:73537630274:web:f7cfd21cb8a121fbd07ddb",
  measurementId: "G-G3HMSNP2WF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
