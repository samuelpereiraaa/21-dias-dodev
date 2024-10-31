let arrayModelo = []
let arrayAno = []
let arrayValor = []
let continuar = true
let contador = 0

while (continuar) {

    console.log('Cadastre seu carro! ')
    let modelo = prompt('digite o modelo: ')  
    arrayModelo[contador] = modelo

    let ano = parseInt(prompt('digite o ano: ')) 
    arrayAno[contador] = ano  

    let valor = parseFloat(prompt('digite o valor: '))
    arrayValor[contador] = valor
    contador++
   

    let confirmar= prompt('deseja inserir um novo carro? (s)/(n)')
    if(confirmar === 'n'){
        continuar = false
        continue
    }
}

// exibindo o nome, ano e valor dos carros inseridos
// exemplo: Celta, 2020 Valor:50.000
console.log('Carros ordenados.')
for(let i = 0; i < arrayModelo.length ; i++) {
    console.log(arrayModelo[i] + '- ' + arrayAno[i]+ '- ' + 'Valor: ' + arrayValor[i])
}
// Ordenar preço --- Algoritimo de ordenação
for (let i = 0; i < arrayValor.length - 1 ; i++){
    for (let j = 0; j < arrayValor.length - i - 1; j++){
        if (arrayValor[j] > arrayValor[ j+1 ]) {

            let modeloMaiorValor = arrayModelo[j]
            arrayModelo[j] = arrayModelo[j+1]
            arrayModelo[j+1] = modeloMaiorValor

            let anoMaiorValor = arrayAno[j]
            arrayAno[j] = arrayAno[j+1]
            arrayAno[j+1] = anoMaiorValor

            let maiorValor = arrayValor[j]
            arrayValor[j] = arrayValor [j+1]
            arrayValor[j+1] = anoMaiorValor

        }
    }
}
    console.log('Carros ordenados pelo preço')
    for(let i = 0; i < arrayModelo.length ; i++) {
    console.log(arrayModelo[i] + '- ' + arrayAno[i]+ '- ' + 'Valor: ' + arrayValor[i])
    }
    


