const rgbInput = document.querySelector("#rgbInput");
const rgbValue = document.querySelector("#rgbValue");
const hexValue = document.querySelector("#hexValue");

const rbgToHex = (rbg) => {
  const rbgString = rbg.toString().trim().split(",");
  const rbgIntArray = rbgString.map((char) => parseInt(char.trim()));
  if (
    rbgIntArray.length === 3 &&
    rbgIntArray.map((int) => int > 0 && int < 256)
  ) {
    return `#${rbgIntArray.map((int) => int.toString(16)).join("")}`
  } else {
    alert("Invalid RBG Value");
  }
};

const hexToRbg = (hex) => {
  const hexString = hex.toString().trim().slice(1);

  if (hexString.length !== 6) alert("Invalid HEX Value");

  var bigint = parseInt(hexString, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + "," + g + "," + b;
};

rgbInput.addEventListener("input", () => {
  hexValue.value = rgbInput.value;
  rgbValue.value = hexToRbg(rgbInput.value)
})

