import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCv61Z98s4SyNG7q0NClExF6RJhTLMlU0E",
    authDomain: "olx-clone-abe1f.firebaseapp.com",
    databaseURL: "https://olx-clone-abe1f.firebaseio.com",
    projectId: "olx-clone-abe1f",
    storageBucket: "olx-clone-abe1f.appspot.com",
    messagingSenderId: "836094713564",
    appId: "1:836094713564:web:5269bb49a55ab6fc8c5e19",
    measurementId: "G-70GEWETYMM"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

