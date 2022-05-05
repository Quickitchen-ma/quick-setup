importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBXB76n5eqe9kJUUh91nSFzbcq5K6Zbs8c",
  authDomain: "quickitchenmaroc.firebaseapp.com",
  projectId: "quickitchenmaroc",
  storageBucket: "quickitchenmaroc.appspot.com",
  messagingSenderId: "207508977829",
  appId: "1:207508977829:web:01857e8651ca8058db754c",
  measurementId: "G-Q4BTLW2HDY"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
});
