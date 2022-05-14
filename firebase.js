import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAAN7Frj-Y5o-9WeLC9GR0pHtdUXoYKlOs',
    authDomain: 'coco-chat-ada56.firebaseapp.com',
    projectId: 'coco-chat-ada56',
    storageBucket: 'coco-chat-ada56.appspot.com',
    messagingSenderId: '330950260668',
    appId: '1:330950260668:web:9d13ba50200fedce38ddb9',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider};
