document.addEventListener("DOMContentLoaded", () => {
  const square = document.querySelectorAll(".grid div");
  const result = document.querySelector("#result");
  const displayCurrentPlayer = document.querySelector("#currentPlayer");
  let currentPlayer = 1;

  for (let i = 0, len = squares.length; i < len; i++) {
    (function (index) {
      squares[i].onclick = function () {
          if(squares[index + 7].classList.contains("taken"))
        }
     })
  }

});
