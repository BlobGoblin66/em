// -------------------------
// 1. IMAGES LIST
// -------------------------
// Replace these with your own image paths.
// If using GitHub Pages, put files in /images/ folder.
const images = [
    "images/frank1.png",
    "images/frank2.png",
    "images/frank3.png",
    "images/frank4.png"
];

// -------------------------
// 2. SLIDESHOW SETTINGS
// -------------------------
let current = 0;
const interval = 5000; // 5 seconds per slide

const slideshow = document.getElementById("slideshow");

// Preload images (optional but nice)
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Set first image
slideshow.style.backgroundImage = `url('${images[0]}')`;

// Slideshow loop
setInterval(() => {
    current = (current + 1) % images.length;
    slideshow.style.opacity = 0;

    setTimeout(() => {
        slideshow.style.backgroundImage = `url('${images[current]}')`;
        slideshow.style.opacity = 1;
    }, 1500); // matches fade duration
}, interval);

// -------------------------
// 3. START MUSIC ON CLICK
// -------------------------
const overlay = document.getElementById("start-overlay");
const spotify = document.getElementById("spotify-player");

overlay.addEventListener("click", () => {
  spotify.style.display = "block";  // reveal iframe
  overlay.style.display = "none";   // hide overlay
});



