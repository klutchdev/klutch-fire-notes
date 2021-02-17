import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyCviibf8x5UEBQrqyKwBf46784JOLtDxLs",
  authDomain: "klutch-todo.firebaseapp.com",
  projectId: "klutch-todo",
  storageBucket: "klutch-todo.appspot.com",
  messagingSenderId: "73597702061",
  appId: "1:73597702061:web:bb458c85fedccf1e701b24",
  measurementId: "G-L0GWFMWK5T",
});
firebase.analytics();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();

export default firebase;
