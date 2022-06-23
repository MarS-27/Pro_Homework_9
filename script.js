
valueCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
typeOfCards = ["clubs", "spades", "diamonds", "hearts"];
cols = [];


for(i = 1; i <= valueCards.length ; i++){
rows = [];

    for(x = 0; x < typeOfCards.length; x++) {

        for(j = 1; j <= 7; j++) {

            if((i >= 1 && i <= 9) && j === 1) {
                cols.push(`<div class="card">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                            </div>`);
            } else if (i === 10 && j === 1) {
                cols.push(`<div class="card card--person">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                                <img class="person" src="images/jack.svg" alt="${typeOfCards [x]}">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                            </div>`);   
            } else if (i === 11 && j === 1) {
                cols.push(`<div class="card card--person">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                                <img class="person" src="images/queen.svg" alt="${typeOfCards [x]}">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                            </div>`);   
            } else if (i === 12 && j === 1) {
                cols.push(`<div class="card card--person">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                                <img class="person" src="images/king.svg" alt="${typeOfCards [x]}">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                            </div>`);   
            } else if (i === 13 && j === 1) {
                cols.push(`<div class="card card--person">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                                <img class="person" src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}">
                                <div class="card__info">${valueCards [i - 1]}<img src="images/${typeOfCards [x]}.svg" alt="${typeOfCards [x]}"></div>
                            </div>`);   
            } 
        }
    }        
    rows.push(`${rows.join("")}`)
}

document.write(`<div class="wrapper">${cols.join("")}</div>`);