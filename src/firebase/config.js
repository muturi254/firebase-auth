// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBT6ViC5Ey1Mi8k1oooqxhcrrnj_OqSawA",
    authDomain: "moringabadlands.firebaseapp.com",
    projectId: "moringabadlands",
    storageBucket: "moringabadlands.appspot.com",
    messagingSenderId: "798551324048",
    appId: "1:798551324048:web:01cadfc97dcafeac43ef15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)