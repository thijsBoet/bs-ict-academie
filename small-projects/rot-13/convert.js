const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

textInput.addEventListener("keydown", (e) => {
  return textOutput.value += String.fromCharCode(e.keyCode + 13).toLowerCase();
})
