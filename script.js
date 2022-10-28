const sounds = ["button", "coin", "impact", "pause"];
const buttons = document.getElementById("buttons");

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});
