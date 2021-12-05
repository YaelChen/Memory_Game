function shuffle(array) {
    var m = array.length,
        last, rand;

    // While there remain elements to shuffle - while True…
    while (m) {

        // Pick a remaining element randomly
        rand = Math.floor(Math.random() * m--);

        // Swap it with the current element.
        last = array[m];
        array[m] = array[rand];
        array[rand] = last;
    }

    return array;
}


var cardBack = "images\\Card_back.png";
var memory_images = [];
memory_images[0] = "images\\Moana.png";
memory_images[1] = "images\\BabyMoana.png";
memory_images[2] = "images\\Chicken.png";
memory_images[3] = "images\\Pig.png";
memory_images[4] = "images\\Maui.png";
memory_images[5] = "images\\Grandma.png";
memory_images = memory_images.concat(memory_images) // duplicates all images in the array

shuffle(memory_images)
console.log(memory_images)

var cells = document.getElementsByTagName("td")
var body = document.getElementsByTagName("body")
for (var i = 0; i in cells; i++) {
    var card = document.createElement("IMG");
    card.setAttribute("src", memory_images[i]);
    card.setAttribute("height", "210px");
    card.setAttribute("class", "image");
    //    console.log(card);
    var cell = cells[i];
    //    console.log(cell);
    //    console.log(body);
    cell.appendChild(card);
}

document.querySelectorAll(".back").forEach(item => {
    item.addEventListener('click', event => {
        item.className = "front";
        var fronts = document.getElementsByClassName("front");
        console.log(fronts);
        if (fronts.length > 1) {
            //console.log(fronts[0].innerHTML);
            if (fronts[0].innerHTML === fronts[1].innerHTML) {
                document.querySelectorAll(".front").forEach(item => {
                    setTimeout(() => item.className = ".hidden", 750);
                })
            } else {
                document.querySelectorAll(".front").forEach(item => {
                    setTimeout(() => item.className = ".back", 750);
                })
            }
            var backs = document.getElementsByClassName("back");
            if (backs.length === 0) {
                alert("You Won!")
            }

        }
    })
})