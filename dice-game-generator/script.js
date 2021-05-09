const dicePlayer = document.querySelector(".dice-player")
const rollButton = document.querySelector(".roll-btn")

const diceArray = [
  `<i class="dice-face fas fa-dice-one"></i>`,
  `<i class="dice-face fas fa-dice-two"></i>`,
  `<i class="dice-face fas fa-dice-three"></i>`,
  `<i class="dice-face fas fa-dice-four"></i>`,
  `<i class="dice-face fas fa-dice-five"></i>`,
  `<i class="dice-face fas fa-dice-six"></i>`,
];

let dice = null;
let diceHTML = "";

const randomDice = () => {
  dice = Math.ceil(Math.random() * 6);
}

const randomDiceFace = () => {
  randomDice()
  diceHTML = diceArray[dice - 1]
  dicePlayer.innerHTML += diceHTML
  console.log(dice)
}

const trowMultipleDice = (amount) => {
  randomDiceFace();
}

rollButton.addEventListener('click', () => randomDiceFace())
