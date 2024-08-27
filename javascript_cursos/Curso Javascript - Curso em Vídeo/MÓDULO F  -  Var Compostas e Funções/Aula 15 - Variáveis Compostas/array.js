    let num =  [5, 8, 2, 9, 3, 100]
//      nome    0  1  2  3  4

console.log(num) //Mostra todos os elementos do vetor
console.log(num.length) //Mostra o comprimento do vetor/número de posições que ele possui
console.log(num[2]) //Mostra o elemento da posição mencionada do vetor
console.log(num.sort()) //Ordena os elemento em ordem porém em formato de texto não de númeoro
console.log(num.push(7)) //Add um elemento no final 
console.log(num)
console.log(num.indexOf(7)) //Mostra a posição(chave) do elemento mencionado dentro de um vetor

console.log('----------------------------')

for (let c=0; c < num.length; c++) { //método tradicional de exibição
    console.log(num[c])
} 

console.log('----------------------------')

for(let c in num) {      //método especifico de exibição para array e objetos
    console.log(num[c])
}

