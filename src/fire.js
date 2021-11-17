// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIqBXFbOVrXyyKsq6jEzvtpIXeSQMhmtg",
  authDomain: "react-login-auth-212bf.firebaseapp.com",
  projectId: "react-login-auth-212bf",
  storageBucket: "react-login-auth-212bf.appspot.com",
  messagingSenderId: "767964327499",
  appId: "1:767964327499:web:47f3a3520b113b05cba7ce"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;