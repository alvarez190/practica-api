var node_video = document.getElementById('video');

node_video.addEventListener('contextmenu', (ev) => {
    document.getElementById('duration').innerHTML = node_video.duration();
});