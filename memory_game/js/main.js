
cards = ["queen","queen","king","king"]
cardsInPlay = [];
cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log(cardOne);
alert("User flipped queen");
cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(cardTwo);
alert("User flipped king");
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match");}
		else {
		alert("Sorry, try again");}}
