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
  "CLICK ME, hey subu unkitta romba nala sollanum irunthuchi kellu 💕 Un kitta vandha odane en heart beat speed aagum ❤️‍🔥, en mind blank aagum 😜, konjam childish ah behave panniduven 🤭 aana adhu ellam un mela iruka love nala dhaan 💖 Nee pakkathula ninna odane world slow aagum 🌍✨, time stop aana madhiri feel aagum ⏳💘 Apo apo naan ketpen 'nee yen epadi iruka?' nu 🥺 because un azhagu paatha udane en soul kooda smile pannum 😍🔥 Un sirippu 😊 en stress ah dissolve pannum, un eyes 👀 enna paatha udane en heart melt aagum 💓 Daily un kooda hand pudichittu walk poga 🚶‍♂️🚶‍♀️🌅, simple ah pesikittu sirichikittu nadakara andha moments dhaan enaku real happiness 🤝❤️ Road la small talks 💬, random laughs 😄, silent looks 👀 ellam en life la most precious memories 💞 Na perfect illa ❌ aana un kitta dhaan 100% real ah irupen 🤝❤️ Un happiness dhaan en priority 💖, un tears varama paathukradhu dhaan en promise 🥺💍 Life la evlo kashtam vandhaalum, evlo storms vandhaalum ⛈️ un kai vida maaten 🤞♾️ Un kooda sirikka 😄, un kooda sandai pottu settle aaga 😜, un kooda old age varaikum nadakanum 🏡❤️ So sollu ma… intha rhythm ah lifetime continue pannalama? Will you stay with me forever? Subuuuuuuuu 🥺❤️💍♾️✨",
  "bold 18px Arial",
  "#ffffff"
);

text.textAlign = "center";
text.textBaseline = "top";
text.lineWidth = canvas.width * 0.85;
text.lineHeight = 26;

text.x = canvas.width / 2;
text.y = 20;

stage.addChild(text);
stage.update();




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
  text.y = text.y = 250; 

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
