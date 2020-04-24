import { firestore } from "./firebase";

export const storeUserInFirestore = (email, userName) => {
  console.log('here')
  firestore
    .collection("users").doc(email)
    .set({
      email: email,
      userName: userName,
      rooms:[]
    })
    .then((docref) => {
      console.log("written to firstore with id: ", docref);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const storeUserInLocalStorage = (email, userName) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      email: email,
      userName: userName,
    })
  );
};
