import firebase from 'firebase'
import 'firebase/firestore'
if(!firebase.apps.length){
  firebase.initializeApp(
   {
    apiKey: "AIzaSyBt2gqAit3coEww1fkdD8k7W05JNcxzNNI",
    authDomain: "project-todolist-97ed4.firebaseapp.com",
    databaseURL: "https://project-todolist-97ed4.firebaseio.com",
    projectId: "project-todolist-97ed4",
    storageBucket: "project-todolist-97ed4.appspot.com",
    messagingSenderId: "445264440941",
    appId: "1:445264440941:web:dd41a9848ef4214ff95964",
    measurementId: "G-V9XY04XT1H"
   }) 
}

const db = firebase.firestore()
export { db }

