import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBwrCuqJGoeRA3BiAlVOF82VYekWIuLhEY",
  authDomain: "tiendautez-ddbd8.firebaseapp.com",
  projectId: "tiendautez-ddbd8",
  storageBucket: "tiendautez-ddbd8.firebasestorage.app",
  messagingSenderId: "695505343573",
  appId: "1:695505343573:web:c032e0412b0ccd219eb0dc",
  measurementId: "G-FC16X17JHF"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };