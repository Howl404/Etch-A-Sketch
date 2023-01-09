for (i = 0; i < 4096; i++) {
  document
    .querySelector(".container")
    .appendChild(document.createElement("div"));
}

let divs = document.querySelectorAll("div.container > div");

divs.forEach(function (currentDiv) {
  currentDiv.addEventListener("mouseover", function () {
    currentDiv.classList.add("hover");
  });
});

const container = document.querySelector(".container");

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let numberOfDivs = prompt("Number of divs");
  while (numberOfDivs > 100) {
    alert("Maximum allowed number of divs is 100, please enter valid number.");
    numberOfDivs = prompt("Number of divs");
  }
  createDivs(numberOfDivs);
});

function createDivs(amount) {
  a = amount * amount;
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  removeAllChildNodes(container);
  for (i = 0; i < a; i++) {
    document
      .querySelector(".container")
      .appendChild(document.createElement("div"));
  }
  container.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
  divs = document.querySelectorAll("div.container > div");
  divs.forEach(function (currentDiv) {
    currentDiv.addEventListener("mouseover", function () {
      currentDiv.classList.add("hover");
    });
  });
}
