const scene = document.getElementById('scene');
const startOverlay = document.getElementById('startOverlay');
const flowersContainer = document.getElementById('flowers');
const messagesContainer = document.getElementById('messages');
const bgMusic = document.getElementById('bgMusic');

let musicStarted = false;

function startMusic() {
  if (musicStarted) return;
  musicStarted = true;
  bgMusic.volume = 0.35;
  bgMusic.play().catch(() => {
    musicStarted = false;
  });
}

startOverlay.addEventListener('click', () => {
  scene.classList.add('ready');
  startOverlay.setAttribute('aria-hidden', 'true');
  startMusic();
});

const flowerIcons = ['🌻', '🌻', '🌷', '🌻', '🌹'];
const phrases = [
  "Me gustas más de lo que imaginas",
  "Tu sonrisa es mi lugar favorito",
  "Cada flor amarilla piensa en ti",
  "Haces que todo sea más bonito",
  "No sales de mi mente ni un ratito",
  "Hoy el amarillo lleva tus ojos",
  "Ojalá pudiera darte estas flores en persona",
  "Me encantas, simplemente me encantas",
  "Contigo el tiempo vuela y se siente bien",
  "Eres la casualidad más linda",
  "Me basta un mensaje tuyo para sonreír",
  "Estas flores son la excusa para hablarte",
  "Tu risa es la melodía más bonita",
  "Quiero verte sonreír hoy y siempre",
  "Te ves hermosa todos los días",
  "21 de septiembre y solo pienso en ti",
  "Un girasol para quien ilumina mi día",
  "Pétalos dorados para la más linda",
  "Qué suerte la mía haberte conocido",
  "Me gustas tanto, ¿ya te lo dije?"
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createFlowers() {
  const count = 74;

  for (let i = 0; i < count; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];

    const x = randomBetween(0, 100);
    const y = randomBetween(0, 100);
    const size = randomBetween(1.2, 2.8);
    const rotation = randomBetween(-30, 30);
    const delay = randomBetween(-18, 0);
    const duration = randomBetween(8, 20);

    flower.style.left = `${x}%`;
    flower.style.top = `${y}%`;
    flower.style.fontSize = `${size}rem`;
    flower.style.transform = `rotate(${rotation}deg)`;
    flower.style.animationDelay = `${delay}s`;
    flower.style.animationDuration = `${duration}s`;

    flowersContainer.appendChild(flower);
  }
}

function createMessages() {
  const count = 110;

  for (let i = 0; i < count; i++) {
    const message = document.createElement('div');
    message.className = 'float-text' + (Math.random() > 0.48 ? ' gold' : '');
    message.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    const x = randomBetween(2, 96);
    const y = randomBetween(6, 94);
    const fontSize = randomBetween(0.6, 1.55);
    const rotation = randomBetween(-12, 12);
    const delay = randomBetween(-12, 0);
    const duration = randomBetween(9, 20);

    message.style.left = `${x}%`;
    message.style.top = `${y}%`;
    message.style.fontSize = `${fontSize}rem`;
    message.style.transform = `rotate(${rotation}deg)`;
    message.style.animationDelay = `${delay}s`;
    message.style.animationDuration = `${duration}s`;

    messagesContainer.appendChild(message);
  }
}

createFlowers();
createMessages();
