const btn = document.getElementById("btn");
btn.addEventListener("click", tabuada);

function tabuada() {
  let txtnum = document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  if (txtnum.value.length == 0) {
    alert("Digite um número válido");
  } else {
    let num = Number(txtnum.value);
    let c = 1;
    tab.innerHTML = " "
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `tab${c}`
      tab.appendChild(item);
      c++
    }
  }
}
