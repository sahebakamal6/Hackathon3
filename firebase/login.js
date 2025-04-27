import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      alert('Logged In');
      window.location.href = 'landingpage.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});


// Google Login Function 

  
const googleButton = document.getElementById('google-btn');
const provider = new GoogleAuthProvider();

googleButton.addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Logged in with Google!");
      window.location.href = "landingpage.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
});


