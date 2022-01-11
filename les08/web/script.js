const myTitle = document.getElementById("myTitle");

const myImage = document.getElementById("myImage");

const myInput = document.getElementById("myInput");

let locaties =
[
{
    "titel":"plaats0",
    "image":"css/img/0.jpg",
},

{
    "titel":"plaats1",
    "image":"css/img/1.jpg",
},

{
    "titel":"plaats2",
    "image":"css/img/2.jpg",
},

{
    "titel":"plaats3",
    "image":"css/img/3.jpg",
},

{
    "titel":"plaats4",
    "image":"css/img/4.jpg",
},

{
    "titel":"plaats5",
    "image":"css/img/5.jpg",
},

{
    "titel":"plaats6",
    "image":"css/img/6.jpg",
},

{
    "titel":"plaats7",
    "image":"css/img/7.jpg",
},

{
    "titel":"plaats8",
    "image":"css/img/8.jpg",
},

{
    "titel":"plaats9",
    "image":"css/img/9.jpg",
},

{
    "titel":"plaats10",
    "image":"css/img/10.jpg",
},

{
    "titel":"plaats11",
    "image":"css/img/11.jpg",
},
]

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}