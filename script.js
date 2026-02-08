const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");

const texts = [
  "No 😜",
  "Are you sure?",
  "Think again",
  "Don’t do this",
  "Please 🥺",
  "Still no?"
];

let index = 0;

// NO button runs + text change
noBtn.addEventListener("mouseover", () => {
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth - 20;
  const maxY = cardRect.height - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  noBtn.textContent = texts[index % texts.length];
  index++;
});

// YES button
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});