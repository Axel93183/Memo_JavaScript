// Récupération des pièces depuis le fichier JSON
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());

// Fonction qui génère toute la page web
function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        
        // On crée l’élément h2.
        const nomElement = document.createElement("h2");
        // On accède à l’indice i de la liste pieces ('const article') pour configurer le texte du titre.
        nomElement.innerText = article.nom;
        // On rattache le titre à pieceElement (la balise article)
        pieceElement.appendChild(nomElement);

        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        pieceElement.appendChild(prixElement);

        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        pieceElement.appendChild(categorieElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment"
        pieceElement.appendChild(descriptionElement);

        const disponibiliteElement = document.createElement("p");
        disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock"
        pieceElement.appendChild(disponibiliteElement);

        // On rattache la balise article à la section class fiches
        document.querySelector(".fiches").appendChild(pieceElement);
    }
}
// Appel de la fonction pour le premier affichage de la page
genererPieces(pieces)

// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);//créer une copie de la liste "pieces".
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    //console.log(piecesOrdonnees);
    // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

/**
 * 
 * La propriété innerHTML permet d’effacer ou de remplacer le contenu d’un élément du DOM.
 * 
 * En manipulant le DOM, vous pouvez générer une nouvelle version de la page web.
 * 
 * La combinaison de ces deux opérations permet de mettre à jour la page lorsque l’utilisateur interagit avec elle.
 * 
 */