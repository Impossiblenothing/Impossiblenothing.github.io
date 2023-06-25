const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = 'cover';