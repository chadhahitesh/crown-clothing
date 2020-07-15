import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDglpcd7vkANN8qNEj2tf3yK2lHb3JO0O4",
  authDomain: "crown-clothing-b6cf2.firebaseapp.com",
  databaseURL: "https://crown-clothing-b6cf2.firebaseio.com",
  projectId: "crown-clothing-b6cf2",
  storageBucket: "crown-clothing-b6cf2.appspot.com",
  messagingSenderId: "1010966774980",
  appId: "1:1010966774980:web:e0b76755d7e7738bf3f591",
  measurementId: "G-P576W18JL9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`)

 const snapShot = await userRef.get();

 if (!snapShot.exists){
   const {displayName ,email} =userAuth;
   const  createdAt = new Date();

   try{
  await userRef.set ({
      displayName,
      email,
      createdAt,
      ...additionalData
  })
   } catch (error){
   console.log('error creating user' , error.message);
   }
 }
 return userRef

};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
