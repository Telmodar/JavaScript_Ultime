//EXERCICE 2 

let poids   = prompt("Quel est votre poids ? ");
let taille  = prompt("Quel est votre taille en centimetres ? ");

function calculImc (poidsUser, tailleUser){
    
    tailleUserCm    = tailleUser / 100 ; 

    imc             = poidsUser / Math.pow(tailleUserCm, 2) ;
    
    return imc ;
}

calculImc(poids, taille) ;

if (imc > 25){
alert("Votre IMC est de " + imc + " t'es un putain de gros") ;
}

else {
    alert("Votre IMC est de " + imc + ". Va bouffer un peu espèce de squelette") ; 
}









// EXERCICE 1 
/*function abracadabra() {

    let prenom  = prompt("Quel est votre prénom : ");
    let nom     = prompt("Quel est votre nom : ");
    let age     = prompt("Quel est votre age : ");

    alert   ("Sapristi ! On ne m'avait pas prévenu que c'était vous " 
            + prenom 
            + " ! Euh... Je veux dire... Monsieur le grand magicien " 
            + nom 
            + " ! Cela fait déjà " 
            + age 
            + " ans que vous faites rayonner notre contrée ! ");
    
}

abracadabra();/*
 







/*

(function(){console.log("Je suis une fonction annonyme ! ")})();

function prevoirAge(){

    let valAge = prompt("Quel est votre age ? ") ;
    valAge = Number(valAge); 

    alert("Bientôt vous aurez " + (valAge +1) + " ans !") ;

}

prevoirAge() ; 

-----------

function cuisiner (nombreDeGateaux, minPrepa = 10, minCuiss = 15) {

    let resultat = nombreDeGateaux * (minPrepa + minCuiss) ;
    return resultat ;
}

let tempsDePrepaChoco = cuisiner(4)
let tempsDePrepaFraisier = cuisiner(1, 100)
console.log(tempsDePrepaFraisier + tempsDePrepaChoco); 

let crie = "test"; // variable globale


function crieDeGuerre() {

    crie = "Arhhrhrhhh"; //variable locale
    console.log(crie); 
}

crieDeGuerre();
console.log(crie);



function addition(nb1, nb2) {

    alert(nb1 + nb2)
    
}

//addition(12, 5)


function name() 

{
    let nom = prompt("Quel est votre nom : ")
    alert("Vous vous appelez " + nom + " !")
    
}

name()



function sayHello() {
    
    alert("Hello guys !")

}

sayHello()


let prenom = "Christophe";
let nom = "Santamaria";

console.log(prenom);
console.log(nom);


prenom = "Tom";
nom = "Pouce";
let age = 18%3;


console.log("Bonjour " + prenom + ' ' + nom + " !");
console.log("Ton age est : " + age);

alert("Hello world ! ");


if(confirm("Etes vous sur ?")) {

    alert("Ok")
}
else {

    alert("Annultion") 
}


const age = prompt("Entrez votre age");

alert("Vous avez " + age + " ans");*/