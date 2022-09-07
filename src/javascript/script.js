var bubbleCount = 30;
var bubbleField = document.getElementById("bubble-field");

//generate bubbles with randomly timed animation durations
const bubblesFish = () => {
  for (i = 0; i < bubbleCount; i++) {
    var randNum = Math.floor(Math.random() * 20) + 1;
    var animDur = 2 + 0.5 * randNum;
    moveEl = document.createElement("div");
    moveEl.setAttribute("class", "bubble-rise");
    moveEl.setAttribute("style", "animation-duration: " + animDur + "s;");

    bubbleEl = document.createElement("div");
    bubbleEl.setAttribute("class", "bubble");
    bubbleElContent = document.createTextNode("");
    bubbleEl.appendChild(bubbleElContent);

    moveEl.appendChild(bubbleEl);
    bubbleField.appendChild(moveEl);
  }
};
function blueClick() {
  document.getElementById("blue").innerHTML = "🟢🎣";
}
function whiteClick() {
  document.getElementById("white").innerHTML = "🟢🎣";
}
function redClick() {
  document.getElementById("red").innerHTML = "🟢🎣";
}
function yellowClick() {
  document.getElementById("yellow").innerHTML = "🟢🎣";
}
