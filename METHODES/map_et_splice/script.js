// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json"); // Envoie une requête pour récupérer le contenu du fichier JSON

const pieces = await reponse.json(); // Parse la réponse en tant qu'objet JavaScript (ici, un tableau "[]") contenant les pièces

/*("Parse" signifie analyser et transformer des données d'un format à un autre, généralement pour rendre les données utilisables par un programme informatique.)*/

/** METHODE MAP ET SPLICE **/

// Crée un tableau 'nomsDispo' contenant les noms des pièces en utilisant la fonction map
const nomsDispo = pieces.map(piece => piece.nom);

// Crée un tableau 'prixDispo' contenant les prix des pièces en utilisant la fonction map
const prixDispo = pieces.map(piece => piece.prix);

// Parcourt le tableau 'pieces' en commençant par la fin
for (let i = pieces.length - 1; i >= 0; i--) {
    // Vérifie si la propriété 'disponibilite' de la pièce est false (non disponible)
    if (!pieces[i].disponibilite) {
        // Supprime l'élément à l'index 'i' du tableau 'nomsDispo'
        nomsDispo.splice(i, 1);
        // Supprime l'élément à l'index 'i' du tableau 'prixDispo'
        prixDispo.splice(i, 1);
    }
}

// Crée un nouvel élément 'ul' pour afficher les pièces disponibles
const disponiblesElement = document.createElement("ul");

// Parcourt les tableaux 'nomsDispo' et 'prixDispo' en parallèle
for (let i = 0; i < nomsDispo.length; i++) {
    // Crée un nouvel élément 'li' pour chaque paire nom-prix
    const nomPrixElement = document.createElement('li');
    // Remplit le contenu de l'élément 'li' avec le nom de la pièce et son prix
    nomPrixElement.innerText = `${nomsDispo[i]} - ${prixDispo[i]} €`;
    // Ajoute l'élément 'li' au conteneur 'ul'
    disponiblesElement.appendChild(nomPrixElement);
}

// Sélectionne l'élément avec la classe 'disponibles' dans le document HTML
// et ajoute le conteneur 'ul' contenant les pièces disponibles
document.querySelector('.disponibles').appendChild(disponiblesElement);

/**
 * 
 * Les deux premières lignes utilisent la méthode MAP pour créer deux nouveaux tableaux, nomsDispo et prixDispo, à partir du tableau pieces. 
 * 
 * MAP parcourt chaque élément du tableau pieces et applique la fonction fournie pour extraire les noms et les prix respectifs, créant ainsi les tableaux de noms et de prix des pièces disponibles.
 * 
 * La boucle FOR parcourt le tableau pieces en commençant par la dernière position (index pieces.length - 1) jusqu'au premier élément (index 0).
 * 
 *  Elle vérifie si la propriété 'disponibilite' de chaque pièce est false (non disponible). 
 * Si c'est le cas, les éléments correspondants sont supprimés des tableaux nomsDispo et prixDispo à l'aide de la méthode SPLICE.
 * 
 * Ensuite, un élément de liste non ordonnée (ul) est créé pour contenir la liste des pièces disponibles.
 * 
 * Une autre boucle FOR parcourt les tableaux nomsDispo et prixDispo en parallèle.
 * 
 * Pour chaque paire nom-prix, un élément de liste (li) est créé. 
 * Le contenu de cet élément est rempli avec le nom de la pièce et son prix au format ${nom} - ${prix} €.
 * 
 * Chaque élément li est ajouté au conteneur ul créé précédemment.
 * 
 * Enfin, en utilisant document.querySelector, l'élément HTML avec la classe CSS 'disponibles' est sélectionné et le conteneur ul contenant les éléments de la liste des pièces disponibles est ajouté comme enfant de cet élément, ce qui l'affiche sur la page.
 * 
 */