/* =========================
   CONFETTI ANIMATION
========================= */
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
});

const confettiCount = 120;
const confetti = [];

for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        x: Math.random() * W,
        y: Math.random() * H - H,
        r: Math.random() * 6 + 4,
        d: Math.random() * confettiCount,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, W, H);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.lineWidth = c.r;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
        ctx.stroke();
    });
    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
        c.x += Math.sin(c.d);
        c.tilt = Math.sin(c.tiltAngle) * 15;

        if (c.y > H) {
            c.x = Math.random() * W;
            c.y = -20;
            c.tilt = Math.random() * 10 - 10;
        }
    });
}

setInterval(drawConfetti, 20);


/* =========================
   BUBBLES WITH LOVE EMOJIS
========================= */
const loveEmojis = ['❤️','💖','💕','💌','🥰','💘'];
let bubbleInterval;

function createBubbles(count = 50) {
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);

        const size = Math.random() * 40 + 20;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * window.innerWidth + 'px';
        bubble.style.fontSize = (size / 2) + 'px';
        bubble.style.animationDuration = (Math.random() * 3 + 2) + 's';

        if (Math.random() < 0.5) {
            bubble.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
            bubble.style.background = 'transparent';
        } else {
            bubble.style.background = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.6)`;
            bubble.style.borderRadius = '50%';
        }

        bubble.addEventListener('animationend', () => bubble.remove());
    }
}

// Small bubbles appear slowly by default
bubbleInterval = setInterval(() => createBubbles(2), 4000);

// On bubble button click, create many bubbles at once
function popBubbles() {
    createBubbles(50);
}


/* =========================
   FLOATING HEARTS
========================= */
function createHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        document.body.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
    }, 500);
}
createHearts();


/* =========================
   YOUTUBE MUSIC PLAYERS
========================= */
function addMusicPlayers() {
    const musicLinks = [
        'https://www.youtube.com/embed/egVAW6l_QU8?autoplay=1&loop=1&playlist=egVAW6l_QU8',
        'https://www.youtube.com/embed/NrLkTZrPZA4?autoplay=1&loop=1&playlist=NrLkTZrPZA4',
        'https://www.youtube.com/embed/TihRnbAhGOw?autoplay=1&loop=1&playlist=TihRnbAhGOw',
        'https://www.youtube.com/embed/GxldQ9eX2wo?autoplay=1&loop=1&playlist=GxldQ9eX2wo'
    ];

    musicLinks.forEach(link => {
        const iframe = document.createElement('iframe');
        iframe.width = 0;
        iframe.height = 0;
        iframe.src = link;
        iframe.title = "Birthday Music";
        iframe.allow = "autoplay";
        iframe.frameBorder = 0;
        document.body.appendChild(iframe);
    });
}

// Initialize music players
addMusicPlayers();
