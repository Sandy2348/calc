const buttonsEle = document.querySelectorAll("button");
console.log(buttonsEle);
const inutFieldVal = document.getElementById("result");
for (let ele = 0; ele < buttonsEle.length; ele++) {
  buttonsEle[ele].addEventListener("click", () => {
    const buttonValue = buttonsEle[ele].textContent;
    if (buttonValue === "C") {
      clearAll();
    } else if (buttonValue === "=") {
      calculateAll();
    } else {
      appendValue(buttonValue);
    }
  });
}
function clearAll() {
  inutFieldVal.value = "";
}
function calculateAll() {
  inutFieldVal.value = eval(inutFieldVal.value);
}
function appendValue(buttonValue) {
  inutFieldVal.value += buttonValue;
}
