import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { 
  getDatabase,
  set, 
  ref, 
  push, 
  onChildAdded, 
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyB66NTx04xVJFJApBHyFPSU7TG15S_uYEY",
  authDomain: "clinica-saude-4e909.firebaseapp.com",
  databaseURL: "https://clinica-saude-4e909-default-rtdb.firebaseio.com",
  projectId: "clinica-saude-4e909",
  storageBucket: "clinica-saude-4e909.appspot.com",
  messagingSenderId: "1078818159838",
  appId: "1:1078818159838:web:b29c4d659f47314a9a164f",
  measurementId: "G-VHC6WCFXPS"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { 
  db,
  set, 
  ref, 
  push, 
  onChildAdded, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  auth,
  signOut
 };