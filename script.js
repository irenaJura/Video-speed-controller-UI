const speed = document.querySelector('.speed'); // entire speed bar
const bar = speed.querySelector('.speed-bar'); // just the bar
const video = document.querySelector('.flex');

function handleMove(e) {
    // console.log(e);
    // y is between 0 and 410px
    const y = e.pageY - this.offsetTop; // subtract possible margin/padding
    const percent = y / this.offsetHeight; // between 0 and 1
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%'; // full percentage numbers
    bar.style.height = height;
    const playbackRate = percent * (max - min) + min; // offset height
    bar.textContent = playbackRate.toFixed(2);
    // apply to video, playbackRate property sets the rate at which the media is being played back
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
