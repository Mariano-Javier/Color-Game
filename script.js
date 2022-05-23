let modo = 6;
let colors;
let pickedColor;
let clickedColor;
let eleccion = false;
let botones = document.querySelectorAll(".square");

document.querySelector("#reset").addEventListener("click", function () {
  resetGame(modo);
});

document.querySelector("#hard").addEventListener("click", function () {
  toggle("hard");
  modo = 6;
  resetGame(modo);
  esconder(false);
});

document.querySelector("#easy").addEventListener("click", function () {
  toggle("easy");
  modo = 3;
  resetGame(modo);
  esconder(true);
});

resetGame(modo);

function game() {
  for (let i = 0; i < colors.length; i++) {
    botones[i].style.backgroundColor = colors[i];
  }

  for (let i = 0; i < colors.length; i++) {
    botones[i].addEventListener("click", function () {
      clickedColor = this.style.backgroundColor;

      if (clickedColor == pickedColor) {
        document.querySelector("#message").textContent = "¡Correcto!";
        changeColors(pickedColor);
        document.querySelector("h1").style.backgroundColor = pickedColor;
        document.querySelector("#reset").textContent = "Play Again?";
      } else {
        document.querySelector("#message").textContent = "Intentalo Nuevamente";
        botones[i].style.backgroundColor = "rgb(35, 35, 35)";
      }
    });
  }
}

function changeColors(color) {
  for (let i = 0; i < colors.length; i++) {
    botones[i].style.backgroundColor = color;
  }
}

function pickColor(modo) {
  return colors[Math.floor(Math.random() * modo)];
}

function randomColor() {
  return ("rgb(" + randomNumber() + ", " + randomNumber() +", " + randomNumber() + ")" );
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function generateRandomColors(modo) {
  let array = [];
  for (let i = 0; i < modo; i++) {
    array[i] = randomColor();
  }
  return array;
}

function resetGame(modo) {
  colors = generateRandomColors(modo);
  pickedColor = pickColor(modo);
  document.querySelector("#colorDisplay").textContent = pickedColor;
  document.querySelector("h1").style.backgroundColor = "steelblue";
  document.querySelector("#reset").textContent = "Nuevos Colores";
  document.querySelector("#message").textContent = "";
  game();
}

function toggle(nivel) {
  if (nivel=="hard"){
    document.querySelector("#hard").classList.add("selected");
    document.querySelector("#easy").classList.remove("selected");
  }
  if (nivel=="easy"){
    document.querySelector("#easy").classList.add("selected");
    document.querySelector("#hard").classList.remove("selected")
  }
}

function esconder(eleccion) {
  let botonesEsconder = document.querySelectorAll(".hide");
  if (eleccion) {
    for (let i = 0; i < botonesEsconder.length; i++) {
      botonesEsconder[i].classList.add("esconder");
    }
  } else {
    for (let i = 0; i < botonesEsconder.length; i++) {
      botonesEsconder[i].classList.remove("esconder");
    }
  }
}