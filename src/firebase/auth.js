import firebase, { auth } from "./index";

export const signOut = async () => auth.signOut();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = () => auth.signInWithPopup(googleAuthProvider);
