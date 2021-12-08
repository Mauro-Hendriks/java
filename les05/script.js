const myImage = document.getElementById('myImage');


const info = document.getElementById('info');

let paintings = [
"css/img/painting0.jpg",
"css/img/painting1.jpg",
"css/img/painting2.jpg",
"css/img/painting3.jpg",
"css/img/painting4.jpg",
"css/img/painting5.jpg"
];

let informatie =[
"Dit is een logo",
"De rode wijngaard is gemaakt op november 1888 en hangt nu in het Pesjkinmuseum in Moskouw",
"De sterrennacht is gemaakt op juni 1889 en hangt nu in het Museum of Modern Art in New York",
"Sterrennacht boven de Rhéne is gemaakt op september 1888 en hangt nu in het Musée d'Orsay in Parijs",
"Zonnebloemen is gemaakt op januari 1889 en hangt nu in het Neue Pinakothek in Munchen",
"Boerderij in de Provence is gemaakt op september 1888 en hangt nu in het National Gallery of Art in Washington D.C.",
"De rode wijngaard is gemaakt op november 1888 en hangt nu in het Pesjkinmuseum in Moskouw"
]

function changeImage(index){
    info.innerHTML= informatie[index];
    
    myImage.src = paintings[index];
}
