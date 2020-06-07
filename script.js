const alert = document.getElementById('alert').style.display = "none";

function closeAlert() {
    document.getElementById('alert').style.display = "none";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCuxtPxRWP_Y7hL8ZVZjVF-dpqc6US0yXo",
    authDomain: "my-portfolio-b1b64.firebaseapp.com",
    databaseURL: "https://my-portfolio-b1b64.firebaseio.com",
    projectId: "my-portfolio-b1b64",
    storageBucket: "my-portfolio-b1b64.appspot.com",
    messagingSenderId: "47940804634",
    appId: "1:47940804634:web:5fc4160863f5ac80c731a3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for submission
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    // Get Values
    var first_name = getInputVal('grid-first-name');
    var last_name = getInputVal('grid-last-name');
    var email = getInputVal('grid-email');
    var text = getInputVal('grid-text');

    // Save Message
    saveMessage(first_name, last_name, email, text);

    // Show Alert
    document.getElementById('alert').style.display = "block";

    // Clear Form
    document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message sto firebase
function saveMessage(first_name, last_name, email, text) {
    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        first_name: first_name,
        last_name: last_name,
        email: email,
        text: text
    });
}