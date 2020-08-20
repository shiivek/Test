import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB3PScpHT5htjde9k95m_JZMl84UNBM6yA",
  authDomain: "book-santa-app-e800c.firebaseapp.com",
  databaseURL: "https://book-santa-app-e800c.firebaseio.com",
  projectId: "book-santa-app-e800c",
  storageBucket: "book-santa-app-e800c.appspot.com",
  messagingSenderId: "879270782971",
  appId: "1:879270782971:web:40b51df4d37def82fc0d5e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
