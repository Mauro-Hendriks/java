const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitla(fruit){
    const nieuwElement = document.createElement('h2');

    nieuwElement.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement);
    nieuwElement.className = 'rood';
}

function zetInGroentela(groente){
    const Element = document.createElement('h2');

    Element.innerHTML = groente;
    groentevak.appendChild(Element);
    Element.className = 'groen';
}