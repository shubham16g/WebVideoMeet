if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    "apiKey": "AIzaSyCDxyIHWrTNhRfuHZXKQSLW6vpYEAuDc4w",
    "authDomain": "videocallaplication.firebaseapp.com",
    "databaseURL": "https://videocallaplication-default-rtdb.asia-southeast1.firebasedatabase.app",
    "messagingSenderId": "857796434966",
    "projectId": "videocallaplication",
    "storageBucket": "videocallaplication.appspot.com"
});