
let i=1;
function add(){ 
    while(i>10){
        i++;
    }   
    const NouvelElement = document.createElement('div');
    NouvelElement.className = 'umwibutsa';
    const conteneur = document.getElementById('ajout');
    conteneur.appendChild(NouvelElement);
    i++;

    console.log(i);
}
