import firebase from 'firebase'
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBrH5ijtEySfZ0WRvj5iUdt6ET34gVb9oM",
    authDomain: "classproject-401c4.firebaseapp.com",
    projectId: "classproject-401c4",
    storageBucket: "classproject-401c4.appspot.com",
    messagingSenderId: "332548331922",
    appId: "1:332548331922:web:459819cae6e98f9b84894b"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()