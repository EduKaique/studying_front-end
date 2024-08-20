var btn = document.getElementById("contbtn");
btn.addEventListener("click", contagem);

function contagem() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  let res = document.getElementById("resultado");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
    window.alert("[ERRO]");
  } else {
    res.innerHTML = "Contanto:  ";
    let numi = Number(inicio.value);
    let numf = Number(fim.value);
    let nump = Number(passo.value);
    if (nump <= 0) {
      window.alert("Passo inválido! Considerando passo = 1");
      nump = 1;
    }

    if (numi < numf) {
      // Contagem crescente
      for (let c = numi; c <= numf; c += nump) {
        res.innerHTML += `${c} -> `;
      }
    } else {
      // Contagem regressiva
      for (let c = numi; c >= numf; c -= nump) {
        res.innerHTML += `${c} -> `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
