// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxUtOczaL3zUxWpmtwesMrV74KknapZeM",
    authDomain: "clone-10831.firebaseapp.com",
    databaseURL: "https://clone-10831.firebaseio.com",
    projectId: "clone-10831",
    storageBucket: "clone-10831.appspot.com",
    messagingSenderId: "302816071981",
    appId: "1:302816071981:web:0cbf1c170c5bc93d1d03a4",
    measurementId: "G-K7DNGXECNY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};