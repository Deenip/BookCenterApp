import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDyPE_vnLJ4mWxOQTcqj0i3TXGMz8KLX_Y",
    authDomain: "reactproject1-786c2.firebaseapp.com",
    databaseURL: "https://reactproject1-786c2.firebaseio.com",
    storageBucket: "reactproject1-786c2.appspot.com",
    messagingSenderId: "882758738059"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
    name: 'Book Center App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Dee',
    age: 25
  }
});

firebaseRef.child('app/name').remove();
