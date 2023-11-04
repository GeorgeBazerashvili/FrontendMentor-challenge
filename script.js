let carousel = document.getElementById("carousel");
let whatever = document.getElementById("switch");
let controllers = document.querySelectorAll(".controller");
let cards = document.querySelectorAll(".card");

let currentCardIndex = 0;
let currentController = controllers[currentCardIndex];
let currentCard = cards[currentCardIndex];
currentController.classList.add("selected");
currentCard.classList.add("show");

controllers.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.value);
    currentController.classList.remove("selected");
    currentCard.classList.remove("show");
    currentCardIndex = e.target.value;
    currentController = controllers[e.target.value];
    currentCard = cards[currentCardIndex];
    currentController.classList.add("selected");
    currentCard.classList.add("show");
  });
});

console.log(carousel.childNodes);
