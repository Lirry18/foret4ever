document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enterBtn');
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');
    const audioPlayer = document.getElementById('audioPlayer');

    enterBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        content.classList.remove('hidden');
        content.classList.add('visible');
        audioPlayer.play();
    });

    playBtn.addEventListener('click', () => {
        audioPlayer.play();
    });

    stopBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});