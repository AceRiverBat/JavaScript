/*
//afficher texte dans console
console.log('Hello !!!!!!!!!!!!!!!!!!!!!! hehe')

//variable
const ville = 'Lyon';
const departement = 'Rhone';
const prenom = 'Sarah';
console.log(ville, departement, prenom,)


//calcul
var w = 5
var v = 10
console.log(x+y)

//true/false
/*inutile 
var vrai = true;
var faux = false;

var i = 2 < 7;
console.log(x)


//a undefined
let x = 18;
let y = -7;
const nom = 'Manu';
const jojo = false;
let a;
console.log(a)

//exo
const nomSas = 'Xefi';
const duree = 7;
const formationPro = 'Xefi';
console.log("Je participe à la formation",nomSas,"pendant",duree,"mois afin d'integrer l'entreprise",formationPro)

//tableau
let array = ['yo',-7,9/3,7<10]
console.log(array)
console.log(array[2])

//changer élément d'un tableau
array[0] = 'hey'
console.log(array)

//sélectionner différents élements d'un tableau
let myData = [
    [12,6,8],
    [44,71,90],
    [23,54,99]
]
myData[1][2] = 11
console.log(myData[1][2],myData[2][0]);

//exo
let friends = ['Janice', 'Monica', 'Ben']
console.log(friends)

friends.pop()
console.log(friends)

friends.shift()
console.log(friends)

friends.push('Phoebe')
console.log(friends)

friends.unshift('Rachel')
console.log(friends)

friends.splice(2,0,'Ross','Chandler','Joey')
console.log(friends)

//calculatrice
let num1 = prompt("Entrez le premier nombre");
let num2 = prompt("Entrez le deuxième nombre");
alert(parseInt(num1) + parseInt(num2));


//conditions
let kill = 3

if (kill >= 15) {
    console.log("GG frérot")
} else {
    console.log("Sale noob")
}

let age = 72;
let vieux = 70;

if (age >= 1 && age<vieux) {
    console.log("let's go!")
} else if (age >= vieux){
    console.log("c gratuit")
} else {
    console.log("casse toi!")
}
*/


let firstName = prompt("Entrez votre prénom");
let age = prompt("Entrez votre age")

if (firstName == "Sofiane" && age > 18){
    console.log("Welcome!")
} else if (firstName.length == age){
    console.log("bizarre...")
} else if (age > 30 && age < 50){
    console.log("vous avez entre 30 et 50ans")
} else if (firstName = "Abby"^"Paul" && age < 70){
    console.log("c ok")
} else{
    console.log("c nul!")
}