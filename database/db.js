import  * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBlIQ0pGo9k6D8ksP4QLZLyKPTOfoDvjsA",
    authDomain: "vuelos-d039d.firebaseapp.com",
    databaseURL: "https://vuelos-d039d.firebaseio.com",
    projectId: "vuelos-d039d",
    storageBucket: "vuelos-d039d.appspot.com",
    messagingSenderId: "291964536405"
};
let app = firebase.initializeApp(config);
export const db = app.database();