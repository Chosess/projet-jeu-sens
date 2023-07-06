var audioPlayer = document.getElementById('audio-player');
var volumeButton = document.getElementById('volume-button');
var muteButton = document.getElementById('mute-button');
var prevTime = 0; // Variable pour stocker la position de lecture précédente

volumeButton.addEventListener('click', function () {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    audioPlayer.currentTime = prevTime; // Rétablit la position de lecture précédente
    volumeButton.style.display = 'inline';
    muteButton.style.display = 'none';
  } else {
    audioPlayer.muted = true;
    prevTime = audioPlayer.currentTime; // Enregistre la position de lecture actuelle
    volumeButton.style.display = 'none';
    muteButton.style.display = 'inline';
  }
});

muteButton.addEventListener('click', function () {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    audioPlayer.currentTime = prevTime; // Rétablit la position de lecture précédente
    muteButton.style.display = 'none';
    volumeButton.style.display = 'inline';
  } else {
    audioPlayer.muted = true;
    prevTime = audioPlayer.currentTime; // Enregistre la position de lecture actuelle
    muteButton.style.display = 'inline';
    volumeButton.style.display = 'none';
  }
});




