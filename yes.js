// Canvas & Stage
const canvas = document.getElementById("canvas");
const stage = new createjs.Stage(canvas);
const music = document.getElementById("bgMusic");

// Resize canvas
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Text (center message)
const text = new createjs.Text(
  "Hi, naan un SurA 💕 Un kitta vandha odane enakku romba heat aagidum 🙈❤️‍🔥 Enna control panna mudiyadhu 😜 konjam childish ah behave panniduven 🤭 Aana adhu ellam un mela iruka love nala dhaan 💖 Nee en pakkathula ninna odane world ah marandhuduven 🌍✨ Apo apo naan ketpen… 'nee yen epadi iruka?' nu 🥺💘 because un azhagu romba over ah irukum 😍🔥 Un sirippu 😊 en heart ah melt pannidum, un eyes 👀 enna paatha udane freeze aagidum 💓 Na perfect illa ❌ aana un kitta dhaan 100% real ah irupen 🤝❤️ Daily un mela love increase aagite iruku 📈💕 Un kooda sirikka 😄 un kooda fight panni settle aaga 😜 un kooda life full ah spend panna dhaan en aasai 💍♾️ So please… intha love story ah lifetime complete pannalama? Will you stay with me forever? 🥺❤️✨",
  "bold 20px Arial",
  "#ffffff"
);

text.textAlign = "center";
text.textBaseline = "middle";
text.lineWidth = canvas.width * 0.85;
text.lineHeight = 28;
text.x = canvas.width / 2;
text.y = canvas.height / 2;
stage.addChild(text);


// Hearts creator
function createHeart() {
  const heart = new createjs.Text("❤", "28px Arial", "#ff4d88");
  heart.x = Math.random() * canvas.width;
  heart.y = canvas.height + Math.random() * canvas.height;
  heart.speedY = Math.random() * 1.8 + 0.6;
  heart.waveSpeed = Math.random() * 0.02 + 0.01;
  heart.angle = Math.random() * Math.PI * 2;
  stage.addChild(heart);
  return heart;
}

// Create hearts
const hearts = [];
for (let i = 0; i < 200; i++) {
  hearts.push(createHeart());
}

// Animation loop (♾️ hearts never stop)
createjs.Ticker.framerate = 60;
createjs.Ticker.on("tick", () => {
  // Keep text centered after resize
  text.x = canvas.width / 2;
  text.y = canvas.height / 2;

  hearts.forEach(h => {
    h.y -= h.speedY;
    h.angle += h.waveSpeed;
    h.x += Math.sin(h.angle) * 0.8;

    // Reset heart to bottom when it goes out
    if (h.y < -30) {
      h.y = canvas.height + Math.random() * 100;
      h.x = Math.random() * canvas.width;
    }
  });

  stage.update();
});

// 🔑 Unlock background music on first user interaction
let unlocked = false;
document.addEventListener("click", () => {
  if (unlocked) return;
  unlocked = true;

  music.muted = false;
  music.volume = 0;
  music.play();

  // Fade in audio
  const fade = setInterval(() => {
    if (music.volume < 0.8) {
      music.volume += 0.02;
    } else {
      clearInterval(fade);
    }
  }, 200);
});
