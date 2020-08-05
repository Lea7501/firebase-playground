import config from '../config.js';

// Initialisation de Firebase
firebase.initializeApp(config);

// --------------------------------------------
// Initialisation des gestionnaires d'événement
// --------------------------------------------

$('#loginButtonGithub').on('click', githubLogin);
$('#loginButtonGoogle').on('click', googleLogin);
$('#loginForm').on('submit', emailPasswordLogin);

// ----------------------------------------
// Définition des gestionnaires d'événement
// ----------------------------------------

function githubLogin() {
    // Votre code ici ...
    // Créez un provider pour Github
}

function googleLogin() {
    // Votre code ici ...
    // Créez un provider pour google
}

function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#emailField').val();
    const password = $('#passwordField').val();

    // Votre code ici ...
    // Utilisez les variables 'email' et 'password' pour les transmettre à Firebase via le provider "Email/Password"
}