// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyCOEWNxz-PSgZd-iE19O8ykM4yCullRVAQ",
  authDomain: "film-hall-booking.firebaseapp.com",
  projectId: "film-hall-booking",
  storageBucket: "film-hall-booking.firebasestorage.app",
  messagingSenderId: "307732411395",
  appId: "1:307732411395:web:44377a6f4f30259e7c0a36",
  measurementId: "G-3HKF4JPPFT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore access
const db = firebase.firestore();