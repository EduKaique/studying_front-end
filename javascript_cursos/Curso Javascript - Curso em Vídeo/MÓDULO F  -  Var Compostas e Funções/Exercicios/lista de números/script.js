const btnadd = document.getElementById("btnAdd");
btnadd.addEventListener("click", adicionarnum);
let num = document.getElementById("txtnum");
let lista = document.getElementById("flista");
let res = document.getElementById("resultado");
var valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, list) {
  if (list.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionarnum() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    var item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = ""
  } else {
    alert("Valor inválido ou já encrontrado na lista");
  }
  num.value = ''
  num.focus()
}

const btnfin = document.getElementById("btnFin");
btnfin.addEventListener("click", () => {
  if (valores.length == 0) {
    alert ("Adicione valores antes de finalizar")
  } else {
    let totalcad = valores.length;
    let maiorv = Math.max.apply(null, valores);
    let menorv = Math.min.apply(null, valores);
  
    let sum = 0;
    for (let i = 0; i < valores.length; i++) {
      sum += valores[i];
    }
    let med = sum / valores.length;
  
    res.innerHTML = `<p>Ao todo, temos ${totalcad} números cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi o ${maiorv}</p>`;
    res.innerHTML += `<p>O menor valor informado foi o ${menorv}</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`;
    res.innerHTML += `A média dos valores digitados é ${med}`;
  }
});




