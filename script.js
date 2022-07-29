function fonctionYoKwandikaEx1(){
    let a = prompt("veuillez entrer un nombre: A= ");
    while (a == null){
        a = prompt("Où est-ce que vous allez comme ça. Entrez un nombre s'il vous plaît A= ");
    };
    let b = prompt("veuillez entrer un deuxième: B= ");
    while (b == null || a == b){
        b = prompt("Veuillez entrer un nombre différent de A: B= ");
    }

    let c = prompt("veuillez entrer un troisième: C= ");
    while (c == null || c == b || c == a){
        alert("Veuillez entrer un nombre différent");
        c = prompt("Veuillez entrer un nombre différent de A et B: C= ");
    }

    alert("A= "+ a + "\n B= " + b +  "\n C= "+ c + "\n Fyonda ok");

if (a > b && a > c) {
    document.getElementById("exerciceYambere").innerHTML = "Le maximum est égal à " + a + "= A" ;}
else if (b > a && b > c) {
    document.getElementById("exerciceYambere").innerHTML = "Le maximum est égal à " + b + "= B" ;
    }
else if (c > a && c > b){
    document.getElementById("exerciceYambere").innerHTML = "Le maximum est égal à " + c + "= C" ;
    }
    document.getElementById("exerciceYambere").innerHTML += "\n" + "c'est fini pour le premier point!!!";
}

function fonctionYoKwandikaEx2(){
document.getElementById("exerciceYakabiri").innerHTML = "Hello World!";
}
function fonctionYoKwandikaEx3(){
var na = prompt("A= ");
var nb = prompt("B= ");
var nc = prompt("C= ");

var delta = (nb*nb)-4(na*nc);
var Solution1= delta
document.getElementById("exerciceYagatatu").innerHTML = "On va résoudre l'équation Ax²+Bx+C=0";
}

function fonctionYoKwandikaEx4(){
var text = document.getElementById("paragraphe").innerHTML += '\n Hogi';
}