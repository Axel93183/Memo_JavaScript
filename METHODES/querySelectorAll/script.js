//Récupérer une liste d'éléments sous forme de TABLEAU avec la MÉTHODE "querySelectorAll"

let listeInputRadio = document.querySelectorAll(".zoneChoix input");

//Vérifier le(s) type(s) d'élément(s) contenu(s) dans le TABLEAU listeInputRadio[...] dans la console

console.log(listeInputRadio);

//Parcourir les différents éléments de cette liste un par un (pour y accéder)

for (let i = 0; i < listeInputRadio.length; i++) {
    
    console.log(listeInputRadio[i]);//Vérifie le(s) type(s) d'élément(s) du TABLEAU un par un (ici dans la console)

    //Accéder à une propriété (ou méthode) de chaque élément d'un tableau HTML

    let proprieteIsContentEditable = listeInputRadio[i].isContentEditable
    console.log(proprieteIsContentEditable);//Vérifie la valeur de la propriété de chaque élément du TABLEAU dans la console
}

