// -------------------------
// 1. IMAGES LIST
// -------------------------
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

// Preload images
images.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Set first image
slideshow.style.backgroundImage = `url('${images[0]}')`;

// Slideshow loop with film grain dissolve
setInterval(() => {
    current = (current + 1) % images.length;

    // fade out
    slideshow.style.opacity = 0;
    slideshow.style.filter = "blur(2px) brightness(1.1)";

    setTimeout(() => {
        // switch image
        slideshow.style.backgroundImage = `url('${images[current]}')`;

        // fade in
        slideshow.style.opacity = 1;
        slideshow.style.filter = "blur(0px) brightness(1.0)";
    }, 1800); // match CSS transition
}, interval);
