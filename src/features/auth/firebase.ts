import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChRj050OBxKTDu12XpfLtnmLkXr-AdUW0",
    authDomain: "react-demo-977b3.firebaseapp.com",
    projectId: "react-demo-977b3",
    storageBucket: "react-demo-977b3.firebasestorage.app",
    messagingSenderId: "162791669267",
    appId: "1:162791669267:web:b66a8b12ae9e91723ac9e6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ← this was the missing piece