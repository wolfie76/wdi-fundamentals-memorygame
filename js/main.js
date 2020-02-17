let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
  	console.log("Sorry, try again.");
}
}

function flipcard(cardId) {
  cardsInPlay.push(cardId);
  console.log("User flipped " + cards[cardId]);

  if (cardsInPlay.length === 2) {
	checkForMatch();
	}
}

flipcard(0);
flipcard(2);

