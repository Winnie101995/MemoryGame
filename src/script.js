//Card options - create cards for the memory game

const cards = [
  {
    name: "fries",
    img: "src/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "src/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "src/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "src/images/pizza.png",
  },

  //copy image again

  {
    name: "fries",
    img: "src/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "src/images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "src/images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png",
  },
  {
    name: "pizza",
    img: "src/images/pizza.png",
  },
];

// return a random card -
cards.sort(() => 0.5 - Math.random());
console.log(cards);

//grab our html grid and use it in Java
const grid = document.querySelector(".grid");

//storing win or lose results 
const resultDisplay = document.querySelector("#result")
//stroring card names
let cardsChosen = [];

//storing cardIds
let cardsChosenIds = [];

//storing match cards

let cardsWon = [];
//make our grid with html

function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    //creates card
    const card = document.createElement("img");
    // gives each card the attribute of course and image path
    card.setAttribute("src", "src/images/blank.png");
    //gives it a data id
    card.setAttribute("data-id", i);
    // add an event listener so when we click it it flips
    card.addEventListener("click", flipCard);
    //put cards into the grid
    grid.appendChild(card);
  }
}

//evoke function

// checking for matching / ensuring that people cannot touch multiply cards

function checkForMatch() {
  const cardsList = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  //checking if the same card is checked

  if (optionOneId == optionTwoId) {
    cardsList[optionOneId].setAttribute("src", "src/images/blank.png");
    cardsList[optionTwoId].setAttribute("src", "src/images/blank.png");
    alert("You have clicked the same image!");
    // check if the same matching cards are checked
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You have found a match!");
    cardsList[optionOneId].setAttribute("src", "src/images/white.png");
    cardsList[optionTwoId].setAttribute("src", "src/images/white.png");
    cardsList[optionOneId].removeEventListener("click", flipCard);
    cardsList[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }

  // when we don't find a match
  else {
    cardsList[optionOneId].setAttribute("src", "src/images/blank.png");
    cardsList[optionTwoId].setAttribute("src", "src/images/blank.png");
    alert("Sorry, try again");
  }
  cardsChosen = [];
    cardsChosenIds = [];

    //announcing the score 
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === 6) {

        resultDisplay.textContent = 'Congratulations! You have Won';
        
    }
}

//function for flipping the card

function flipCard() {
  let cardId = this.getAttribute("data-id");
  //put cards into our grid
  //console.log(cards[cardsId])
  //clicking two cards at the same time
  cardsChosen.push(cards[cardId].name);
  cardsChosenIds.push(cardId);
  //flip the card and show image
  this.setAttribute("src", cards[cardId].img);
  //get the to revert back to blank if not a match // we are ensuring that we only have 2 cards clicked .length
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
  console.log(cardsChosenIds);
  console.log(cardsChosen);
}

//evoke function
createBoard();
