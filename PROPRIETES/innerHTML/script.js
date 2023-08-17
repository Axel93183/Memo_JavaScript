//Récupérer un élément en appelant la méthode "getElementById" (ou autre si besoin)

let divElement = document.getElementById("monElement")

//Vérifier le type de l'élément dans la console

console.log(divElement);

//ACCÉDER à la PROPRIÉTÉ "innerHTML" et la mettre dans une variable
contenuDivElement = divElement.innerHTML;

console.log(contenuDivElement);//Vérifie la valeur initiale du contenu HTML de l'élément [=== console.log(divElement.innerHTML)]

//Modifier la valeur du contenu de l'élément
divElement.innerHTML = "Salut tout le monde !!!"

//Mettre la valeur du contenu de la modification dans une variable
nouveauContenuElement = divElement.innerHTML;

console.log(nouveauContenuElement);//Vérifie la nouvelle valeur du contenu dans la console [=== console.log(divElement.innerHTML)]