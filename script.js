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
document.getElementById("exerciceYakabiri").innerHTML = "L'explication pratique que j'ai pu remarqué est que lorsque on fait l'operation valeur1 && valeur2, l'ordinateur renvoie toujours la deuxième valeur lorsque les valeurs sont vrais. Une seule exception rancontré avec le 0 puisque '0 = false' par défaut. ";
}
function fonctionYoKwandikaEx3(){
var na = prompt("A= ");
var nb = prompt("B= ");
var nc = prompt("C= ");

var delta = nb**2-4*(na*nc);
var d = delta**(0.5);
var Solution1 = (nb+d)/2;
var Solution2 = (nb-d)/2;
alert("la première solution est "+Solution1+" et la seconde solution est "+Solution2);
document.getElementById("exerciceYagatatu").innerHTML = "On va résoudre l'équation "+na+"x²+"+B+"x+"+C+"=0";
}

function fonctionYoKwandikaEx4(){
var text = document.getElementById("paragraphe").innerHTML = 'regardez dans votre console';
}