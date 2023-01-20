for (i = 0; i < 4096; i++) {
  document
    .querySelector(".container")
    .appendChild(document.createElement("div"));
}

let mouse = 1;

window.addEventListener("load", startup, false);
let colorWell;
let currentColor = "#ff0000";
function startup() {
  colorWell = document.querySelector("#color");
  colorWell.value = "#ff0000";
  colorWell.addEventListener("input", update, false);
  colorWell.addEventListener("change", update, false);
  colorWell.select();
}

function update(event) {
  currentColor = event.target.value;
}

let divs = document.querySelectorAll("div.container > div");

divs.forEach(function (currentDiv) {
  window.addEventListener("mousedown", function (event) {
    event.preventDefault();
    mouse = 1;   
    currentDiv.addEventListener("mouseenter", function () {
      if(mouse == 1){currentDiv.style.backgroundColor = currentColor;}
    
  })
  ;})

  window.addEventListener("mouseup", function () {
    mouse = 0;
  });
});

const container = document.querySelector(".container");

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let numberOfDivs = prompt("Number of squares per side");
  while (numberOfDivs > 100) {
    alert(
      "Maximum allowed number of squares per side is 100, please enter valid number."
    );
    numberOfDivs = prompt("Number of squares per side");
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
    window.addEventListener("mousedown", function (event) {
      event.preventDefault();
      mouse = 1;   
      currentDiv.addEventListener("mouseenter", function () {
        if(mouse == 1){currentDiv.style.backgroundColor = currentColor;}
      
    })
    ;})

    window.addEventListener("mouseup", function () {
      mouse = 0;
    });
  });
}
