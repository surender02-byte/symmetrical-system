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
  "Hi, naan un SurA 💕 Unna first time paatha moment lendhu en life romba azhaga maariduchu ✨ Un sirippu 😊 en darkest days la kooda light ah irukum, un voice 🎶 en mind ku peace kudukum 🌸 Un message varum pothu en heart speed ah adikum 💓😜 Na perfect illa ❌ konjam stubborn, konjam overthinking irupen 🙈 aana un kitta dhaan real ah irupen 🤝❤️ Un happiness dhaan en priority 💖 Un kanneer varama paathukradhu dhaan en responsibility 🥺 The longer I'm with you, the deeper I fall for you 💘 Daily daily un mela love increase aagite iruku 📈💕 Nee en strength 💪 nee en comfort 🏡 nee en motivation 🔥 nee en future dreams la main character 🎬❤️ Life la evlo kashtam vandhaalum, evlo problem vandhaalum, un kai vida maaten 🤞💍 Un kooda sirikka 😄 un kooda sandai pottu settle aaga 😜 un kooda valka full ah share panna dhaan en aasai ♾️✨ Innum pala varusham, pala memories, pala cute fights 😆💕 ellam un kooda dhaan venum… So sollu ma… will you stay with me forever? 🥺❤️💍♾️✨",
  "bold 22px Arial",
  "#ffffff"
);

text.textAlign = "center";
text.textBaseline = "middle";
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
