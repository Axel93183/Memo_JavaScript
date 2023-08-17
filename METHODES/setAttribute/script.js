//Récupérer un élément en APPELANT la MÉTHODE "getElementById"

let baliseImage = document.getElementById("premiereImage");

//Vérifier le type de l'élément dans la console

console.log(baliseImage);

/**Appeler la MÉTHODE setAttribute et modifier/personnaliser l'attribut voulu

Elle prend 2 ARGUMENTS (les paramètres):

1- l'attribut qu'on veut modifier

2- la nouvelle valeur de l'attribut**/

baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");

console.log(baliseImage);//Vérifier si la modification a été prise en compte dans la console ( NB: le code HTML a été modifié dans l'inspecteur du navigateur mais pas le code source index.html)

/**Modifier un attribut lorsque l'élément HTML en possède un de base (ceci écrasera toutes les modifications précédentes)

baliseImage.alt = "Ceci est une image de test modifiée";

baliseImage.src = "cheminImage.jpg";

console.log(baliseImage);//Vérifier si la modification a été prise en compte dans la console**/