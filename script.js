console.log("Laboratoire prêt !");
const nom = "Corentin";
let age = 18;
console.log(age)
const motDePasseAttendu = "secret123";
let motDePasseSaisi = prompt("Veuillez entrer le mot de passe :");

if ("Comparaison entre motDePasseUtilisateur et motDePasseAttendu") {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}