import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZ-M6FzuR4zPqHuFd4zzajs2Y1ZW-iCH0",
  authDomain: "sign-language-app-76ce2.firebaseapp.com",
  projectId: "sign-language-app-76ce2",
  storageBucket: "sign-language-app-76ce2.appspot.com",
  messagingSenderId: "683833477052",
  appId: "1:683833477052:web:f906bc8505204b34960db9",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
