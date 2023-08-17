//CRÉER un élément HTML (balise)

let nouvelElement = document.createElement("div");

// Récupérer un élément parent existant

let parentElement = document.querySelector("body")

// Ajouter le nouvel élément au parent

parentElement.appendChild(nouvelElement);//Dans l'inspecteur du navigateur, l'élément a été créé et ajouter au code, pas dans le code HTML source