import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js"
export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyA0enS6MbU_vEzxIAmI4Sv2NqAg8G7G4qQ",
    authDomain: "maintain-iq-99fd0.firebaseapp.com",
    projectId: "maintain-iq-99fd0",
    storageBucket: "maintain-iq-99fd0.firebasestorage.app",
    messagingSenderId: "641101963172",
    appId: "1:641101963172:web:ef8cd996813121c9e52b31",
    measurementId: "G-1ZMT1ZEQS2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

