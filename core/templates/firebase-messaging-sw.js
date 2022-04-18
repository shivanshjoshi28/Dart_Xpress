importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBk8ozu6shC6TkC5quC7R2fSUWiNEkiz2I",
  authDomain: "fastparcel-345317.firebaseapp.com",
  projectId: "fastparcel-345317",
  storageBucket: "fastparcel-345317.appspot.com",
  messagingSenderId: "110294742333",
  appId: "1:110294742333:web:fa421774aeb428246bc154"
});

const messaging = firebase.messaging();