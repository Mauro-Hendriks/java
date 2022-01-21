const myTitle = document.getElementById("myTitle");

const myImage = document.getElementById("myImage");

const myInput = document.getElementById("myInput");

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest'),
}

let current_index = 0;

let locaties = [
{
    "titel":"Ingang silver bullet",
    "image":"css/img/0.jpg",
    "directions":{
        "zuid": 1
    }
},

{
    "titel":"Gang bij docentenkamer",
    "image":"css/img/1.jpg",
    "directions":{
        "noord": 0,
        "west": 2,
        "oost": 5,
        "zuid": 4,
    }
},

{
    "titel":"Gang voor de trap",
    "image":"css/img/2.jpg",
    "directions":{
        "oost": 1,
        "zuid": 3,
    }
},

{
    "titel":"plaats3",
    "image":"css/img/3.jpg",
    "directions":{
        "noord": 2,
    }
},

{
    "titel":"plaats4",
    "image":"css/img/4.jpg",
    "directions":{
        "noord": 1,
    }
},

{
    "titel":"plaats5",
    "image":"css/img/5.jpg",
    "directions":{
        "west": 1,
        "oost": 6,
        "noord": 10,
    }
},

{
    "titel":"Gang voor C 0.90",
    "image":"css/img/6.jpg",
    "directions":{
        "west": 5,
        "oost": 7,
        "zuid": 11,
    }
},

{
    "titel":"plaats7",
    "image":"css/img/7.jpg",
    "directions":{
        "noord": 9,
        "zuid": 8,
        "west": 6,
    }
},

{
    "titel":"plaats8",
    "image":"css/img/8.jpg",
    "directions":{
        "noord": 7,
    }
},

{
    "titel":"plaats9",
    "image":"css/img/9.jpg",
    "directions":{
        "west": 10,
        "zuid": 7,
    }
},

{
    "titel":"plaats10",
    "image":"css/img/10.jpg",
    "directions":{
        "oost": 9,
        "zuid": 5,
    }
},

{
    "titel":"plaats11",
    "image":"css/img/11.jpg",
    "directions":{
        "noord": 6,
    }
},
]

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
    current_index = index;
    updateDirections();

}

function updateDirections(){
    let possible = locaties[current_index].directions;
    
    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}

function goDire(richting){
    let punt_index = locaties[current_index].directions[richting]
    show(punt_index)
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}