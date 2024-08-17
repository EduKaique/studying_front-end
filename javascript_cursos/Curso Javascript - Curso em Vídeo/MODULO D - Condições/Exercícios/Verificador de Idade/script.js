document.getElementById("botão").addEventListener("click", verificar);

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("ano");
  var resultado = document.querySelector("div#resultado");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade > 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'image/crianca-homem.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'image/jovem-homem.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'image/adulto-homem.jpg')
      } else if (idade < 100) {
        //idoso
        img.setAttribute('src', 'image/idoso-homem.jpg')
      } else {
        //morto
        img.setAttribute('src', 'image/esqueleto.jpeg')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'image/crianca-mulher.jpg')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'image/jovem-mulher.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'image/adulto-mulher.jpg')
      } else if (idade < 100) {
        //idoso
        img.setAttribute('src', 'image/idosa-mulher.jpg')
      } else {
        img.setAttribute('src', 'image/esqueleto.jpeg')
      }
    }
    img.setAttribute('alt', 'Foto de pessoa')
    if (idade < 100) {
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    } else {
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos. Você está Morto.`
    }
    resultado.appendChild(img)
  }
}
