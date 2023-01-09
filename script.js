for (i = 0; i < 256; i++) {
  document
    .querySelector(".container")
    .appendChild(document.createElement("div"));
}

const divs = document.querySelectorAll("div.container > div");

divs.forEach(function (currentDiv) {
  currentDiv.addEventListener("mouseover", function () {
    currentDiv.classList.add("hover");
    setTimeout(() => {
      currentDiv.classList.remove("hover");
    }, 500);
  });
});
