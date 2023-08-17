let monBouton1 = document.getElementById("monBouton1");
monBouton1.addEventListener("click", function () {
    console.log("TU ES MA CHAMPIONNE !!!")
});

let monBouton2 = document.getElementById("monBouton2");

monBouton2.addEventListener("click", (event) => {
    console.log("TU ES MA MARVELOUS !!! Alors arrête la clope")
    console.log(event.target);

});

document.addEventListener('keypress', (event) => {
    console.log(event.key);
});