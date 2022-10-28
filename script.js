const sounds = ["sneaky", "pixel", "impact", "pause"];
const buttons = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    StopSound();
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});

function StopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
