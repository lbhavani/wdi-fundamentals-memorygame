
const cards = [
{rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"},
{rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"},
{rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"},
{rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"}
];
cardsInPlay = [];
function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
		
		alert("You Found a Match!");}
		else {
		alert("Sorry, Try Again!");}	
}
function flipCard() {
	const cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
		cardsInPlay.push(cards[cardID].rank);
		this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();}
}

function createBoard() {
	
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard ();

