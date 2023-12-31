import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "dropbox-clone-8db9f.firebaseapp.com",
  projectId: "dropbox-clone-8db9f",
  storageBucket: "dropbox-clone-8db9f.appspot.com",
  messagingSenderId: "579566203890",
  appId: "1:579566203890:web:f6b29cdcfdfe30d25c716b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
