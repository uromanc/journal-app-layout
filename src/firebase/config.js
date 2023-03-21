// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSA7FXx4_AfjBQEgZIu4CuLs9ryESEf3U',
  authDomain: 'react-courses-55fff.firebaseapp.com',
  projectId: 'react-courses-55fff',
  storageBucket: 'react-courses-55fff.appspot.com',
  messagingSenderId: '276839661883',
  appId: '1:276839661883:web:9a56f13d4c741b013ef71e'
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)