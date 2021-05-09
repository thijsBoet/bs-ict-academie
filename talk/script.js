const cards = document.querySelectorAll('.card');
const cardNames = [];

const toilet = document.querySelector(".toilet");
const sleep = document.querySelector(".sleep");
const shower = document.querySelector(".shower");
const tshirt = document.querySelector(".tshirt");
const eat = document.querySelector(".eat");
const drink = document.querySelector(".drink");
const home = document.querySelector(".home");
const sick = document.querySelector(".sick");
const happy = document.querySelector(".happy");
const sad = document.querySelector(".sad");
const love = document.querySelector(".love");
const kiss = document.querySelector(".kiss");
const friend = document.querySelector(".friend");
const family = document.querySelector(".family");
const tv = document.querySelector(".tv");
const music = document.querySelector(".music");

const speak = (listener, word) => {
  listener.addEventListener("mousedown", () => {
    let utterance = new SpeechSynthesisUtterance(word.toString());
    speechSynthesis.speak(utterance);
  });
}

// cardNames.forEach(cardName => {
//   const cardName = document.querySelector(`.${cardName}`);
//   speek(cardName, cardName)
// })

speak(toilet, "toilet");
speak(sleep, "sleep");
speak(shower, "shower");
speak(tshirt, "clothe");
speak(eat, "eat");
speak(drink, "drink");
speak(home, "go home");
speak(sick, "sick");
speak(happy, "happy");
speak(sad, "sad");
speak(love, "love");
speak(kiss, "hug");
speak(friend, "friend");
speak(family, "family");
speak(tv, "watch tv");
speak(music, "listen to music");

cards.forEach((card) => {
  cardNames.push(card.className.split(" ").slice(1).join(" "));
});

console.log(cardNames)
