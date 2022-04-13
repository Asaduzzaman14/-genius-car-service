// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDBtnjxs-FrHZhwzS6GlBofmkWakwsw80A",
//     authDomain: "genius-car-services-d0550.firebaseapp.com",
//     projectId: "genius-car-services-d0550",
//     storageBucket: "genius-car-services-d0550.appspot.com",
//     messagingSenderId: "50053834803",
//     appId: "1:50053834803:web:502b0b6ae6f2ebd5591b46"
// };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth