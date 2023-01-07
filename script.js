const popup = document.querySelector(".popup");

const discord = document.querySelector("#discord");

discord.addEventListener("click", () => {
  navigator.clipboard.writeText("Axorax#3184");
  popup.style.transform = "translate(0%)";
  setTimeout(() => {
    popup.style.transform = "translate(300%)";
  }, 2000);
});

document.querySelector(".close").addEventListener("click", () => {
  popup.style.transform = "translate(300%)";
});
