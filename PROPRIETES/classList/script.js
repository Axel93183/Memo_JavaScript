//Récupérer un élément en APPELANT la MÉTHODE "getElementById"

let baliseImage = document.getElementById("premiereImage");

//Vérifier le type de l'élément dans la console

console.log(baliseImage);

//Accéder à la PROPRIÉTÉ classList et appeler la méthode "add" pour ajouter une valeur supp. à "class" ou s'il n'existe pas, l'attribut "class" et une valeur 

baliseImage.classList.add("nouvelleClasse")

console.log(baliseImage);//Vérifier si la modification a été prise en compte dans la console

//Accéder à la PROPRIÉTÉ classList et appeler la méthode "remove" pour supprimer une classe

baliseImage.classList.remove("photo")

console.log(baliseImage);//Vérifier si la modification a été prise en compte dans la console