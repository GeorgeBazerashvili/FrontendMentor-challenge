let carousel = document.getElementById("carousel");
let whatever = document.getElementById("switch");
let controllers = document.querySelectorAll(".controller");
let cards = document.querySelectorAll(".card");
const hamburger = document.getElementById("hamburger");
const illustration = document.getElementById("illustration");
const navigation = document.getElementById("dropdown-list");

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

hamburger.onclick = () => {
  illustration.classList.toggle("hide");
  navigation.classList.toggle("show");
};

window.addEventListener("resize", () => {
  const x = window.innerWidth;
  if (x >= 900) {
    illustration.classList.remove("hide");
    navigation.classList.remove("show");
  }
});
