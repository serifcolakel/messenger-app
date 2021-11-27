import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
//   databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_API_ID,
//   measurementId: process.env.REACT_APP_API_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAzMJevdV8tCtv6s-XFiczrCMJV3oxyVA4",
  authDomain: "wp-firebase-55aff.firebaseapp.com",
  databaseURL: "http://wp-firebase-55aff.firebaseio.com",
  projectId: "wp-firebase-55aff",
  storageBucket: "wp-firebase-55aff.appspot.com",
  messagingSenderId: "360069187297",
  appId: "1:360069187297:web:6c7c615adb031c063a19a0",
  measurementId: "G-VNLXDR8D6F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = initializeFirestore(app, { useFetchStreams: false });

export { auth, db, storage };
