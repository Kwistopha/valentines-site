function goYes() {
  window.location.href = "yes.html";
}

function goNo() {
  window.location.href = "no.html";
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", shrinkButton);

function shrinkButton() {
  const style = window.getComputedStyle(noBtn);
  const width = parseFloat(style.width);
  const height = parseFloat(style.height);


  const newWidth = width * 0.9;
  const newHeight = height * 0.9;

  noBtn.style.width = newWidth + "px";
  noBtn.style.height = newHeight + "px";
}

