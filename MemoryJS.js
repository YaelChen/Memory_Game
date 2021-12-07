//a function to shuffle the array with each load to make a new game:
function shuffle(array) {
    let m = array.length,
        last, rand;

    //While there remain elements to shuffle - while True…
    while (m) {

        //Pick a remaining element randomly
        rand = Math.floor(Math.random() * m--);

        //Swap it with the current element.
        last = array[m];
        array[m] = array[rand];
        array[rand] = last;
    }
    //returns a shuffeld array
    return array;
}


//makes an array of the chosen card images 
let memory_images = [];
memory_images[0] = "images\\Moana.png";
memory_images[1] = "images\\BabyMoana.png";
memory_images[2] = "images\\Chicken.png";
memory_images[3] = "images\\Pig.png";
memory_images[4] = "images\\Maui.png";
memory_images[5] = "images\\Grandma.png";
memory_images = memory_images.concat(memory_images) // duplicates all images in the array

//use the shuffle function on the array, to shuffle cards
shuffle(memory_images)

//makes an array of cells from all "td" tags
let cells = document.getElementsByTagName("td")


//assign a card for each cell and sets its attributes
for (let i = 0; i in cells; i++) {
    let card = document.createElement("IMG");
    card.setAttribute("src", memory_images[i]);
    card.setAttribute("height", "210px");
    card.setAttribute("class", "image");
    //    console.log(card);
    let cell = cells[i];
    //    console.log(cell);
    //    console.log(body);
    cell.appendChild(card);
}

//changes card's class when clicked to front
document.querySelectorAll(".back").forEach(item => {
    item.addEventListener('click', event => {
        item.className = "front";
        //makes an array of fronts to check how many cards is faced front.
        let fronts = document.getElementsByClassName("front");
        //when the second card reveals, if the src is equal: class changes to hidden. else class returns to back.
        if (fronts.length > 1) {
            if (fronts[0].innerHTML === fronts[1].innerHTML) {
                document.querySelectorAll(".front").forEach(item => {
                    setTimeout(() => item.className = "hidden", 750);
                })
            } else {
                document.querySelectorAll(".front").forEach(item => {
                    setTimeout(() => item.className = "back", 750);
                })
            }
            //makes an array of class back: if there's no unrevealed cards: adds a win text instead of table
            let backs = document.getElementsByClassName("back");
            if (backs.length === 0) {
                document.getElementById("board").innerHTML = "<h1>כל הכבוד!</h1>";
            }

        }
    })
})