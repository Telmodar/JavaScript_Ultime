while(x !=0)
{console.log('Hello')
    x=1}

let info = [];

// info[1] = prompt();

// console.log(info)




// let choukel = {

//     race : "niketamere",
//     poil : "35cm mamene",
//     aboyer: () => console.log("Wouaf"),

//     attaquer : () => console.log("attention j'attaque PD")
    


// }

// choukel.attaquer();
// choukel.aboyer();








// let monTableauAssociatif = {
//     'prenom': 'Mark',
//     'nom': 'Zuckerberg',
//     'poste': 'PDG de Facebook'
// };


// function afficher(tableau) {

//     let chaine = '';
//     for (const valeur in tableau) {

//         chaine += (valeur + " : " + tableau[valeur] + "\n");
//     }
//     console.log(chaine)
// }
// afficher(monTableauAssociatif);



/*

let listeDePays =["Fr", "Be", "Jap", "Mar"];

for (const pays of listeDePays) {

    console.log(pays);

}

listeDePays.forEach(function(pays){

    console.log(pays)

});

listeDePays.forEach(pays => console.log(pays));


*/







/*

let monTableau = ['un', 'deux', 'trois', 'quatre'];
monTableau.splice(1, 0, 'random', 'pie');
// console.log(monTableau);

let monTableau2D = [
    ['Mark', 'Jeff', 'Bill'],
    ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);















let result = 0 ;
let result2 = 0;
var chiffre;


function name(i) {


for (let i = 1; i <= 5; i++) {
    result = result+i ;
    console.log("for " + result);

}}

name(1) ;



function name1(chiffre) {

    if (chiffre <= 5) {
        result2 = result2 + chiffre;
        console.log("if " + result2);
        name1(chiffre+1);

    }

}

name1(1) ;



*/












// try{

// let recompence = prompt ("Choisissez votre recompence : (1)Epee, (2)Couteaux ");  
// let OldDegats = 10 ;
// let newDegats ;  


// switch (recompence) {
//     case "1":
//         newDegats = 40 - OldDegats
//         break;

//     case "2": 
//         newDegats = 20 - OldDegats    

//         break;
//     default:
//         throw new Error("Action non autorisée ! ")
//         break;
// }
// alert("Vous avez choisis " + recompence + " vous dégats sont augmenté de " + newDegats)
// }


// catch(error){
//     alert(error)
// }







// let age = prompt("Quel est votre age ?"); 

// if(age < 18) {
//     alert("Vous n'êtes pas majeur");

// } 

// else if(age > 18 && age < 21) {
//     alert("Vous êtes majeur en france");
// }

// else {
//     alert("Vous êtes majeur");
// }

// age < 18 ? alert("Vous n'êtes pas majeur") : alert("Vous êtes majeur") ; 





/*

// EXERCICE 1
function abracadabra() {

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

abracadabra();



//EXERCICE 2

// let poids   = prompt("Quel est votre poids ? ");
// let taille  = prompt("Quel est votre taille en centimetres ? ");
// // Demande les informations de poids et taille

// function calculImc (poidsUser, tailleUser){


//     return poidsUser / Math.pow(tailleUser / 100, 2) ;
//     // Retourne le resultat de l'IMC
// }


// if (calculImc(poids, taille) > 25){
// alert("Votre IMC est de " + calculImc(poids, taille) + " t'es un putain de gros") ;
// }

// else {
//     alert("Votre IMC est de " + calculImc(poids, taille) + ". Va bouffer un peu espèce de squelette") ;
// }




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