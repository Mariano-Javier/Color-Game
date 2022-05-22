let modo = 6;
let colors = generateRandomColors(modo);
let pickedColor = pickColor(modo);
let clickedColor;



document.querySelector("#colorDisplay").textContent = pickedColor;

let botones = document.querySelectorAll(".square");

function game() {
  for (let i = 0; i < colors.length; i++) {
    botones[i].style.backgroundColor = colors[i];

    botones[i].addEventListener("click", function() {
      clickedColor = colors[i];
      if (clickedColor === pickedColor) {
        document.querySelector("#message").textContent = "¡Correcto!";
        changeColors(pickedColor);
        document.querySelector("h1").style.backgroundColor = pickedColor;
        document.querySelector("#reset").textContent = "Play Again?";
        document.querySelector(".container").style['pointer-events'] = "none";
        
      } else {
        document.querySelector("#message").textContent = "Intentalo Nuevamente";
        botones[i].style.backgroundColor = "rgb(35, 35, 35)";
      }
    });
  }
}
game();

function changeColors(color) {
  for (let i = 0; i < colors.length; i++) {
    botones[i].style.backgroundColor = color;
  }
}

function pickColor(modo) {
  return colors[Math.floor(Math.random() * modo)]; 
}

function randomColor() {
  return (
    "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")"
  );
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
  document.querySelector(".container").style['pointer-events'] = "initial"
  game();
}


document.querySelector("#reset").addEventListener("click", function () {
  resetGame(modo);
});


document.querySelector("#hard").addEventListener("click", function(){ 
  document.querySelector("#hard").classList.add("selected");
  document.querySelector("#easy").classList.remove("selected");
  modo=6;
  resetGame(modo)
  for (let i=3; i<=5;i++){
    botones[i].style.display="initial"
  }


})
document.querySelector("#easy").addEventListener("click", function(){ 
  document.querySelector("#easy").classList.add("selected");
  document.querySelector("#hard").classList.remove("selected")
  modo=3;
  resetGame(modo)
  for (let i=3; i<=5;i++){
    botones[i].style.display="none"
  }

})



