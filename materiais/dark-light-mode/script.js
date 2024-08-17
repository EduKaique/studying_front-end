let content = document.querySelector("div.content");
let trilho = document.getElementById("trilho");
let body = document.querySelector("body");

var icon_dark = document.getElementById('icon-dark')
var icon_light = document.getElementById('icon-light')

//resultado.appendChild(img)

trilho.addEventListener("click", () => {
  trilho.classList.toggle("light");
  body.classList.toggle("light");

});

  

