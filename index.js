const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn");
const imputField = document.getElementById("emoji-input");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.append(emoji);
  }
}

pushBtn.addEventListener("click", function () {
  if (imputField.value) {
    myEmojis.push(imputField.value);
    imputField.value = "";
    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (imputField.value) {
    myEmojis.unshift(imputField.value);
    imputField.value = "";
    renderEmojis();
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  renderEmojis();
});
