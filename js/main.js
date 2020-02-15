/*console.log("Up and running!");
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2);{

	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");	
	}

	else if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry, try again");
	}
}

