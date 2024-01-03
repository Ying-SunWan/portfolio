function animate() {
    bunny.style.backgroundPosition = `${-frame * frameWidth}px 0`;
    frame = (frame + 1) % totalFrames;

    setTimeout(animate, 100); // 100 milliseconds delay between frames
}

const bunny = document.getElementById('happyBunny');

const frameWidth = 96;
const totalFrames = 5;
let frame = 0;

animate();
