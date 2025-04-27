import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDsp_FRhHbO1DUKN6U62hYm_ZL6bazY5Xg",
    authDomain: "hackathon3-22b39.firebaseapp.com",
    projectId: "hackathon3-22b39",
    storageBucket: "hackathon3-22b39.appspot.com",  
    messagingSenderId: "995179580650",
    appId: "1:995179580650:web:fa80c5da6971ce5ab11b93",
    measurementId: "G-XRWEFGH7QR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById("button");

signupForm.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      window.location.href = 'index.html'
    })
    .catch((error) => {
      alert(error.message);
    });
});
