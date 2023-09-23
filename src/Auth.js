import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTucaBKqfJ_XVue5ViN0_WUbie25yAYsk",
    authDomain: "chatapp-6ef99.firebaseapp.com",
    projectId: "chatapp-6ef99",
    storageBucket: "chatapp-6ef99.appspot.com",
    messagingSenderId: "636647512432",
    appId: "1:636647512432:web:ab5eb0414eebc2148017b5",
    measurementId: "G-221ZDF3FT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth