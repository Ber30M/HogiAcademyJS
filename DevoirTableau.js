let TableA = ['Yes' , 'no'];
//ajoutons un peut de contenu avec prompt et la méthode push()


TableA.push('bertrand')
console.log(TableA)

// ajoutons un autre élément avec unshift()

TableA.unshift('Hogi')
console.log(TableA)

// ajoutons un élément pour le supprimer

TableA.unshift(1,2,3);
console.log(TableA);

// supprimons les chiffres
//à l'aide de la méthode *splice*
TableA.splice(0,3);
console.log(TableA);

//Créons une autre table

let TableB = [ "1", "10", "f", "7", "c", "hey", "d", "d", "f" ];

// splice permet en principe de remplacer plusieurs éléments à la fois

TableB.splice(7,2,'Flow','Gros','je');
console.log(TableB);

//Fusionons les tables à l'aide de la méthode *concat*

let TableC = TableA.concat(TableB);
console.log(TableC);

//Classons les éléments de la table

TableC.sort();
console.log(TableC);

let TableD = [1,3,6,45,57,26,34,98,89,42,16,256,9];
console.log(TableD);

function pair(nombre){
    return nombre % 2 == 0;
}

console.log(TableD.findIndex(pair))

