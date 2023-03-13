// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAD8q5czpp_TUb8cCgr45xKaPwl7vcy_mI",
  authDomain: "webrtc-sandbox-7ecec.firebaseapp.com",
  projectId: "webrtc-sandbox-7ecec",
  storageBucket: "webrtc-sandbox-7ecec.appspot.com",
  messagingSenderId: "849573178639",
  appId: "1:849573178639:web:e4e37cf590ac1d4de0227a",
  measurementId: "G-HW8Q6BSGHE"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
