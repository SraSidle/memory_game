const cards = document.querySelectorAll(".card");
let hasFlipedCard = false;
let firstCard, secondCard;
let lockCard = false;

function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlipedCard) {
    hasFlipedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlipedCard = false;
  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  } else {
    onFlipCard();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function onFlipCard() {
  lockCard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockCard = false;
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlipedCard, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * cards.length);
        card.style.order = randomPosition;
    });
})();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

/*
criar uma função que mostra todas as cartas por um tempo de início
criar uma vc acertou
 criar um, jogar novamente
*/