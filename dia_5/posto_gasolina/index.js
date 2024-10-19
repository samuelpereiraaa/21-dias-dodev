let alternativa = Number(prompt('digite o numero da alternativa de sua escolha !\n 1 - abastecer com gasolina.\n 2 - com álcool.\n 3 - calibrar os pneus. '))


switch(alternativa) {
    case 1: 
        valorGasolina = Number(prompt('qual o valor desejado?'))
        let litroGasolina = valorGasolina / 5
        console.log('você abasteceu: ' + litroGasolina + ' litros de gasolina.')
        break

    case 2:
        valorAlcool = Number(prompt('qual o valor desejado?'))   
        let litroAlcool = valorAlcool / 3
        console.log('você abasteceu: ' + litroAlcool + ' litros de alcool.')
        break

    case 3:
        console.log('Pneus calibrados com sucesso!')
        break

    default:
        console.log('Numero inválido')        
        break
}