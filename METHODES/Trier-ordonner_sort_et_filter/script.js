// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json"); // Envoie une requête pour récupérer le contenu du fichier JSON

const pieces = await reponse.json(); // Parse la réponse en tant qu'objet JavaScript (ici, un tableau "[]") contenant les pièces

/*("Parse" signifie analyser et transformer des données d'un format à un autre, généralement pour rendre les données utilisables par un programme informatique.)*/


/** METHODE FILTER **/

const boutonFiltrer = document.querySelector(".btn-filtrer");
// Ajoute un écouteur d'événements pour le clic sur le bouton "boutonFiltrer"
boutonFiltrer.addEventListener("click", function () {
   // Crée un nouveau tableau "piecesFiltrees" en filtrant les éléments du tableau "pieces"
   // Le filtre est basé sur la condition que le prix de chaque "piece" soit inférieur ou égal à 35
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
   // Affiche le tableau résultant après le filtrage dans la console
   console.log(piecesFiltrees);
});
 /**
  * 
  * La fonction filter prend en argument une fonction anonyme qui sera appelée une fois par élément de la liste. 
  * La fonction anonyme prend un paramètre : l’élément à tester, ici on l'appellera "piece". 
  * Elle doit retourner une valeur booléenne selon la validité de la condition du "return":
        * true si l’élément doit se trouver dans la liste filtrée ;
        * false si l’élément ne doit pas se trouver dans la liste filtrée.
  * 
  * Le nouveau tableau appelé piecesFiltrees est créé à partir du tableau existant pieces, en appliquant un filtre basé sur le prix de chaque "piece". Seules les pièces avec un prix inférieur ou égal à 35 "piece.prix <= 35" seront incluses dans ce nouveau tableau.
  * 
  * 
 **/

/** METHODE "SORT" **/

const boutonTrier = document.querySelector(".btn-trier");

const piecesOrdonnees = Array.from(pieces);//créer une copie de la liste "pieces". Cela permet de ne pas toucher à l'ordre de la liste "pieces" pour que les autre tris et filtres de la page fonctionnent correctement
boutonTrier.addEventListener("click", function () {
    piecesOrdonnees.sort(function (a,b) {
        return a.prix - b.prix;
    });
    // Affiche le tableau résultant après le tri dans la console
    console.log(piecesOrdonnees);
});

/****************************************************************************************************************************************
 * 
 * La fonction "sort" prend en argument une nouvelle fonction. Nous déclarons celle-ci à l’intérieur des parenthèses de "sort", sans lui donner de nom. On dit qu’elle est anonyme. Cette fonction anonyme sera appelée par "sort" pour comparer deux éléments entre eux.
 * 
 * la fonction anonyme prend deux paramètres qu’il faudra comparer pour dire lequel doit être rangé avant l’autre dans la liste réordonnée finale. Traditionnellement, on nomme ces deux paramètres A et B.
 * 
 * La fonction "sort" s’attend à recevoir un nombre de la part de la fonction anonyme. Le signe de ce nombre (positif, négatif ou nul) sert à indiquer dans quel ordre ranger les deux éléments :
    * si le nombre est positif, alors B sera rangé avant A ;
    * si le nombre est négatif, alors A sera rangé avant B ;
    * si le nombre est zéro (0), alors l’ordre sera inchangé. 
 *
 * La fonction "sort" modifie la liste qu’elle réordonne “en place” (in-place, en anglais). Cela veut dire que les éléments de la liste changent de place. Cela pose un problème car la liste d’origine avec l’ordre d’origine est aussi modifiée. Pour résoudre ce problème, nous pouvons créer une copie de la liste avec la fonction Array.from
 *
****************************************************************************************************************************************/