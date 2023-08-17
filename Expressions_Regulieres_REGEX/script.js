//Déclarer une variable chaîne avec un mot ;
let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence

//Déclarer un objet RegExp avec le mot-clé new, et lui ai passer entre parenthèses l’expression régulière qui décrit mon format. 
let regex = new RegExp("^[a-z]+$");

let resultat = regex.test(chaine);// .test retourne true ou false

console.log(resultat); // Affiche true.

chaine = 123
resultat = regex.test(chaine)
console.log(resultat, typeof chaine); // Affiche false number


/**
 * 
 * "^[a-z]+$"
 * 
 * "^" : signifie que la chaîne doit commencer par ce qui suit;
 * 
 * "[a-z]" : signifie que la chaîne doit avoir des lettres comprises entre a et z.Le "+" signifie qu’il faut au minimum une seule lettre entre a et z.
 * 
 * "$" : signifie que la chaîne doit finir par ce qui précède.
 * 
 */

const form = document.querySelector('form');
let baliseEmail = document.getElementById('email');

function verifierEmail(balise) {
    let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegex.test(balise.value)) {
        // .test retourne true ou false
        balise.classList.remove("error")
    } else {
        balise.classList.add("error")
    }
}

baliseEmail.addEventListener("change", ()=>{
    verifierEmail(baliseEmail)
})

/*************************************
 * Définition regex pour vérif. email
 *************************************
 * 
 * 1- [a-z0-9._-]+ : vérifie le nom
 * 
 * Au moins un caractère correspondant à ce qui est entre crochets [] :
 * une lettre entre a et z ;
 * un chiffre entre 0 et 9 ;
 * le caractère "." ;
 * le caractère "_" ;
 * le caractère "-" ;
 * 
 * 2- @ : vérifie l'arobase
 * 
 * 3- [a-z0-9._-]+ : vérifie le fournisseur
 * 
 * 4- \\. : vérifie le point "." Nous devons échapper le caractère "\" d'échappement avec "\" pour que le point et lui "\" ne soient pas interprété
 * 
 * 5- [a-z0-9._-]+ : vérifie l'extension
 * 
 * let emailRegex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+")
 * 
 * cf. https://regexper.com/ pour vérifier et visualiser la RegExp
 * cf. https://regex101.com/ pour tester votre expression
 */
