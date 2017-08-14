import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCqCaY4zocyhhgH0gRrdbSpJT0BlJ7zs-s",
  authDomain: "test1-b7580.firebaseapp.com",
  databaseURL: "https://test1-b7580.firebaseio.com",
  projectId: "test1-b7580",
  storageBucket: "test1-b7580.appspot.com",
  messagingSenderId: "85331298397"
}
firebase.initializeApp(config)

export default firebase