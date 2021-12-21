const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');


let seizoen = [
    {
        "titel":"Seizoenen",
        "image":"css/img/seasons.jpg",
        "backGround":"grey"
    },
    {
        "titel":"Lente",
        "image":"css/img/spring.jpg",
        "backGround":"springgreen"
    },
    {
        "titel":"Zomer",
        "image":"css/img/summer.jpg",
        "backGround":"#FFF176"
    },
    {
        "titel":"herfst",
        "image":"css/img/autumn.jpg",
        "backGround":"burlywood"
    },
    {
        "titel":"Winter",
        "image":"css/img/winter.jpg",
        "backGround":"lightskyblue"
    }
];


function show(index){
    myTitle.innerHTML = seizoen[index].titel;
    
    myImage.src = seizoen[index].image;

    document.body.style.backgroundColor = seizoen[index].backGround;
}

console.log("test1")