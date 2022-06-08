const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];

const randomImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${randomImage}`;

document.body.appendChild(image);