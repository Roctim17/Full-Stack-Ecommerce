
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCuUcID61HWnn5pwQ0P49eCvGXwo8mug4A",
  authDomain: "online-mart-7fdbe.firebaseapp.com",
  projectId: "online-mart-7fdbe",
  storageBucket: "online-mart-7fdbe.appspot.com",
  messagingSenderId: "92353822615",
  appId: "1:92353822615:web:8248608769f92538fd4ed2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;