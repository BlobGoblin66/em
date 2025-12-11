const images = [
    "images/frank1.png",
    "images/frank2.png",
    "images/frank3.png",
    "images/frank4.png"
];

let current = 0;
const interval = 5000; // milliseconds per slide

// Shuffle images at start
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(images);

const layer1 = document.getElementById("slideshow1");
const layer2 = document.getElementById("slideshow2");

// Preload images
images.forEach(src => new Image().src = src);

// Initialize
layer1.style.backgroundImage = `url('${images[0]}')`;
layer2.style.backgroundImage = `url('${images[1]}')`;
layer2.style.opacity = 0;

let topLayer = 1;

setInterval(() => {
    const nextIndex = (current + 1) % images.length;
    const fadeInLayer = topLayer === 1 ? layer2 : layer1;
    const fadeOutLayer = topLayer === 1 ? layer1 : layer2;

    fadeInLayer.style.backgroundImage = `url('${images[nextIndex]}')`;
    fadeInLayer.style.opacity = 1;
    fadeOutLayer.style.opacity = 0;

    topLayer = topLayer === 1 ? 2 : 1;
    current = nextIndex;
}, interval);
