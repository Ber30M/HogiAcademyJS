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

let TableB = [ "a", "e", "f", "q", "c", "hey", "d", "d", "f" ];

// splice permet en principe de remplacer plusieurs éléments à la fois

TableB.splice(7,2,'Flow','Gros','je');
console.log(TableB);

//Fusionons les tables à l'aide de la méthode *concat*

let TableC = TableA.concat(TableB);
console.log(TableC);

//Classons les éléments de la table

TableC.sort();
console.log(TableC);

//cherchons l'index d'un élément
TableC.indexOf('hey')
console.log();