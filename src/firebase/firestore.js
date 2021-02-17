import firebase, { firestore } from "./index";

export const userRef = firestore.collection("user-data");

export const createUserDoc = async (userId, data) => {
  await userRef.doc(userId).set(data);
};

export const updateUser = async (userId, data) => {
  await userRef.doc(userId).update(data);
};

export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const increment = firebase.firestore.FieldValue.increment(1);
export const decrement = firebase.firestore.FieldValue.increment(-1);
