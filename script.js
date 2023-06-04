const models = document.querySelectorAll(".model");

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied");
    })
    .catch((error) => {
      alert("Error copying text to clipboard:", error);
    });
}

models.forEach((btn) => {
  btn.onclick = (btn) =>
    copyToClipboard(btn.target.querySelector(".code").textContent);
});