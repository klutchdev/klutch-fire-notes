import firebase, { auth } from "./index";

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const googleSignIn = async () => {
  await auth.signInWithPopup(googleAuthProvider);
};

export const signOut = async () => {
  await auth.signOut();
};
