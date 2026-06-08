window.addEventListener("DOMContentLoaded", () => {
  const music = document.createElement("audio");
  music.id = "bgMusic";
  music.src = "audios/backgroundmusic.mp3";
  music.autoplay = true;
  music.loop = true;
  document.body.appendChild(music);
});
