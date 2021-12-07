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


/*
for (var i = 0, cell; cell in cells; i++) {
    document.table.src = memory_images[i]
        //var x = memory_images[i]
        //cell.src = '<img name=a src=images\\Card_back.png onclick="flip(this)" height=210px>'
    console.log(i)
    var card = document.createElement("IMG");
    card.setAttribute("src", memory_images[i]);
    card.setAttribute("height", "210px");
    document.cell.appendChild(card);

    //cell.innerHTML = '<img src=images\\Grandma.png height=210px>'
}

/*var table = document.getElementById("board");
for (var i = 0, cell; cell = table.cells[i]; i++) {
    console.log(cell[i]);
    //src = memory_images[i]
}


function flip() {

}

//classes for back, front and hidden
//document.a.src = cardBack;
//document.b.src = memory_images[0];

/*class Card {
    constructor(front) {
        this.front = front; //words array
        this.back = "images\\Card_back.png";
        this.flip = function() {
            document.c.src = memory_images[2];

            //var len = this.words.length;
            //for (var i = 0; i < len; i++) {
            //    this.words[i] += "$";
        }
    }

    //console.log("$" + this.words.join(""));

}*/


//var x = new Add("this", "is", "awesome");
//x.print();

//var game = new Card();
//game.flip();