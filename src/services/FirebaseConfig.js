import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAOZXEH1z-73qoPLkEIpSRbmwKvm1GevvM",
    authDomain: "burger-881b0.firebaseapp.com",
    projectId: "burger-881b0",
    storageBucket: "burger-881b0.appspot.com",
    messagingSenderId: "174530371236",
    appId: "1:174530371236:web:4eaafa8b76da7b78399031",
    measurementId: "G-9KFXZQR5FB"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase; // Export 'appFirebase' as the default export
