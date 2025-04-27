const toggleButton = document.querySelector('.toggle')
toggleButton.addEventListener('click',() =>{
   const menuBar = document.querySelector('.menubar');
   menuBar.classList.toggle('menu')
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAWfpEC85S2SZB50i3MVUN2ujdhfZZ2LLM",
    authDomain: "database-781f5.firebaseapp.com",
    databaseURL: "https://database-781f5-default-rtdb.firebaseio.com",
    projectId: "database-781f5",
    storageBucket: "database-781f5.firebasestorage.app",
    messagingSenderId: "92255990111",
    appId: "1:92255990111:web:fe142f85d04dbebae506ea",
    measurementId: "G-T6R7N47CN8"
  };


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
    set(ref(db, 'user/' + document.getElementById('name').value),
{
    username:document.getElementById('name').value,
    number:document.getElementById('number').value,
    email:document.getElementById('email').value
})
alert('data saved');
});

const submitBtn = document.getElementById('submit');
const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');

const pendingBox = document.getElementById('card1');
const inProcessBox = document.getElementById('card2');
const completeBox = document.getElementById('card3');

submitBtn.addEventListener('click', function () {
    let filled = 0;
    if (nameInput.value.trim() !== '') filled++;
    if (numberInput.value.trim() !== '') filled++;
    if (emailInput.value.trim() !== '') filled++;

    if (filled === 0) {
        alert('Please fill at least one field!');
        return;
    }

    const newCard = document.createElement('div');
    newCard.className = 'dynamic-card';

    const info = document.createElement('p');
    info.innerText = `Name: ${nameInput.value || 'empty field'},\n Number: ${numberInput.value || 'empty field'},\n Email: ${emailInput.value || 'empty field'}`;
    newCard.appendChild(info);

    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.className = 'edit-btn';
    newCard.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete-btn';
    newCard.appendChild(deleteBtn);

    if (filled === 1) {
        pendingBox.appendChild(newCard);
    } else if (filled === 2) {
        inProcessBox.appendChild(newCard);
    } else if (filled === 3) {
        completeBox.appendChild(newCard);
    }

    deleteBtn.addEventListener('click', function () {
        newCard.remove();
    });

    editBtn.addEventListener('click', function () {
        
        const cardData = info.innerText.split(',');
        nameInput.value = cardData[0].split(':')[1].trim();
        numberInput.value = cardData[1].split(':')[1].trim();
        emailInput.value = cardData[2].split(':')[1].trim();

        newCard.remove();
    });


    nameInput.value = '';
    numberInput.value = '';
    emailInput.value = '';
});
