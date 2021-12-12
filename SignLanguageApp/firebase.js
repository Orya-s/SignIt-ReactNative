// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = firebase.auth()

//export default auth ;
export { auth };

// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);