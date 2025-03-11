

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { 
  getDatabase, 
  ref, 
  set, 
  get,  
  update, 
  remove 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGCYtTOfbB06c0V2qCPuM7dlm7q_4g1hc",
  authDomain: "crud-implementation-85b5c.firebaseapp.com",
  databaseURL: "https://crud-implementation-85b5c-default-rtdb.firebaseio.com/", 
  projectId: "crud-implementation-85b5c",
  storageBucket: "crud-implementation-85b5c.appspot.com",
  messagingSenderId: "713256347366",
  appId: "1:713256347366:web:a0779e09210555203b7d27",
  measurementId: "G-MMDX82WPLX"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app); // ✅ Realtime Database instance

export async function signup() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const mobile = document.getElementById("signup-mobile").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return;
  }

  try {
    // ✅ Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;          //registered user object.

    // ✅ Store user details in Realtime Database
    await set(ref(db, "users/" + user.uid), {
      name: name,
      email: email,
      mobile: mobile,
      password: password // ❗ Optionally, store hashed passwords for security
    });

    alert("✅ Signup successful! Redirecting to login...");
    window.location.href = "login.html";
  } catch (error) {
    console.error("❌ Error: ", error.message);
    alert(error.message);
  }
}

export async function login () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("✅ Login successful:", user);
      alert("Login Successful!");
      window.location.href = "userDetails.html";
  } catch (error) {
      console.error("❌ Login Error:", error.code, error.message);
      alert(`Error Code: ${error.code} \nMessage: ${error.message}`);
  }
};

// ✅ Export Firebase Instances
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, get, update, remove };
