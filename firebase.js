import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqUQpAUIZ2JqUCCbjBiGZNJS91R56jUhk",
    authDomain: "xpertzs.firebaseapp.com",
    databaseURL: "https://xpertzs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "xpertzs",
    storageBucket: "xpertzs.appspot.com",
    messagingSenderId: "121013306824",
    appId: "1:121013306824:web:ff265b79eb52072012ecfd",
    measurementId: "G-9KL4E6CQ0S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,getFirestore, collection, addDoc};