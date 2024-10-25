// array original

let array = []

let quantidade = Number(prompt ('digite a quantidade de elementos para inserir no array.'))


for(let i = 0; i < quantidade; i++) {
    let numeros = parseInt(prompt('para o índice: ' + i +' digite o número desejado: '))
    array[i] = numeros
}
console.log ('Primeira array de números: ' + array)



// modificando a sequência


let arrayContrária = []

let subtrair = quantidade - 1

for(i = 0; i < 5; i++) {
    arrayContrária[i] = array[subtrair]
    subtrair--
}
console.log ('Contagem decrescente: ' + arrayContrária)