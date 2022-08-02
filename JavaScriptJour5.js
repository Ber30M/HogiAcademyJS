let Person = {
    Izina: "Makobero",
    Itazirano: "Bertrand",
    Se: "NIYIBIGIRA Salvator",
    Nyina: "NDIKUMWAMI Jeannette",
    Aho_Yavukiye: "MUYINGA",
    Itariki_y_amavuka: 1997,
    Etat_Civil: "Célibataire",
    Akazi_Akora: "Etudiant",
    CNI: 531/1806/3680,
    NomComplet: function(){return this.Izina + ' '+this.Itazirano;}
};
// exercice 1: Récuperer une proprieté d'un objet;
console.log(Person.Itazirano);

// Créer une méthode qui me retourne mon nom complet
console.log(Person.NomComplet());
