/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
*/

function writeCards(name, greeting){
    let cards=[];
    for (let i = 0; i < name.length; i++){
    cards.push(`Thank you, ${name[i]}, for the wonderful ${greeting} gift!`);
    }
    return cards;
}
writeCards();


function countDown(value){
while (value >= 0){
    console.log(value--)
}
}
console.log(countDown(value));

