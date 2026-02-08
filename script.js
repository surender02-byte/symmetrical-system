const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const box = document.querySelector(".box");

const texts = [
  "No 😜",
  "Are you sure?",
  "Think again",
  "Don’t do this",
  "Please 🥺",
  "Still no?"
];

let index = 0;

// NO button runs + text change only
noBtn.addEventListener("mouseover", () => {
  const boxRect = box.getBoundingClientRect();

  const maxX = boxRect.width - noBtn.offsetWidth;
  const maxY = boxRect.height - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // ONLY text changes
  noBtn.textContent = texts[index % texts.length];
  index++;
});

// YES button
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
   startScreen.style.display = "none";
});
