import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDyPE_vnLJ4mWxOQTcqj0i3TXGMz8KLX_Y",
      authDomain: "reactproject1-786c2.firebaseapp.com",
      databaseURL: "https://reactproject1-786c2.firebaseio.com",
      storageBucket: "reactproject1-786c2.appspot.com",
      messagingSenderId: "882758738059"
    };
    firebase.initializeApp(config);
}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
