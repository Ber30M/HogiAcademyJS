
let i=0;
function add(){ 
    if(i<10){
    const NouvelElement = document.createElement('div');
    NouvelElement.className = 'umwibutsa';
    const conteneur = document.getElementById('ajout');
    conteneur.appendChild(NouvelElement);
    i++;
    }
    console.log(i);
}
