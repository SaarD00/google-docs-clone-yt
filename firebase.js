// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { collection, doc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBC4U-H4SztLGaK7qXTUETT7mnAWA06Y4U',
  authDomain: 'docs-yt-5a392.firebaseapp.com',
  projectId: 'docs-yt-5a392',
  storageBucket: 'docs-yt-5a392.appspot.com',
  messagingSenderId: '1094874340694',
  appId: '1:1094874340694:web:0c976f6c03c2dba2c70af7',
  measurementId: 'G-FK8064CMNJ',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
