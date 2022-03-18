import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import Firebase from 'Firebase/app'
import 'Firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBC4U-H4SztLGaK7qXTUETT7mnAWA06Y4U',
  authDomain: 'docs-yt-5a392.firebaseapp.com',
  projectId: 'docs-yt-5a392',
  storageBucket: 'docs-yt-5a392.appspot.com',
  messagingSenderId: '1094874340694',
  appId: '1:1094874340694:web:0c976f6c03c2dba2c70af7',
}

if (!Firebase.apps.length) {
  Firebase.initializeApp(FirebaseCredentials)
}

const db = getFirestore(app)

export { db }
export default Firebase
