//Day 1 blue badge

var foods = ["apple", "orange", "rice", "bread", "tofu"]
//console log each item in reverse order
for (let i=foods.length - 1; i >- 1; i--){
    if (i % 2 == 1){
    let word = foods[i]
    let first_letter = word[0].toUpperCase()
    let rest = word.slice(1)
    console.log(first_letter + rest);
}}



let allergies = ["gluten", "soy"]

for (let food of foods){
    console.log(
        food,
        foodLength(food),
        foodAllergy(food))
        //assigns a string based on the function returning true / false
        let longWordResult = foodLength(food) ? "" : "not "
        //formatting the output
        let response = `${food} is ${longWordResult}a long word, and ${foodAllergy(food).toLocaleLowerCase()} it with your allergies`
        console.log(response);
}

function foodLength(food){
    return food.length > 4
}

function foodAllergy (food){
    allergyMap = {
        bread :"gluten",
        tofu :"soy"
    }
    if (allergies.includes(allergyMap[food])) return "You can't eat"
    return "You can eat"

}


let cards = [2, 8, "k", 9, 10, 3, 4, "q", 7, "j", 5, 6, "a"]
let faceCards = []
let numberedCards = []

while(cards.length>0){
    let card = cards.pop()
    if (isFaceCard(card)) {
        faceCards.push(card)
    } else {
        numberedCards.push(card)
    }
}

console.log(cards);
console.log(faceCards);
console.log(numberedCards);

function isFaceCard(){
    switch(card){
        case "k":
        case "q":
        case "a":
        case "j":
            return true
        default:
            return false
    }
    return true
    false
}

