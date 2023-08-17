//Créer deux variables qui vont contenir le texte du titre et du paragraphe

let contenuTitre = "Le titre de ma page"
let contenuParagraphe = "Le contenu du paragraphe"

//Générer du code HTML dans une variable avec les BACKTICKS et l'INTERPOLATION: ${nomVariable}

let div = `
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>`

//Récupérer un élément en APPELANT la MÉTHODE "querySelector"

let body = document.querySelector("body")

//Insérer le code dans l'élément en accédant à la propriété innerHTML

body.innerHTML = div//Le code HTML a été ajouté (cf. l'inspecteur du navigateur, pas le code HTML source)