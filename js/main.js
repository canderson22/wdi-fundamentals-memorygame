var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];
var currentCards = [];
var score = 0;
var scoreCard = document.getElementById('score');
var cardsIdInPlay = [];


var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
    score++;
    scoreCard.textContent = score;
    cardsInPlay = [];
  } else {
    alert('Sorry, try again.');
    cardsInPlay = [];
    for (var i = 0; i < currentCards.length; i++) {
      currentCards[i].setAttribute('src', 'images/back.png');
    }
  }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  for (var i = 0; i < cardsIdInPlay.length; i++) {
    if (cardsIdInPlay[i] === cardId) {
      alert('Sorry you already chose that card, please choose another card.');
      return;
    }
  }
  cardsIdInPlay.push(cardId);
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);
  currentCards.push(this);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();

var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  var confirmReset = confirm('Are you sure you want to reset the game?');
  if (confirmReset === true) {
    score = 0;
    scoreCard.textContent = score;
    cardsInPlay = [];
    for (var i = 0; i < currentCards.length; i++) {
      currentCards[i].setAttribute('src', 'images/back.png');
    }
    currentCards = [];
  } else {
    return
  }
})
