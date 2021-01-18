var node_video = document.getElementById('video');

node_video.addEventListener('contextmenu', (ev) => {
    document.getElementById('duration').innerHTML = "Duracion => " + node_video.duration + " segundos.";
});

node_video.addEventListener('click', () => {
    if (!node_video.paused && !node_video.ended) {
        node_video.pause();
    } else {
        node_video.play();
    }
});