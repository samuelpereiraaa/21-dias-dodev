// caixa eletrônico DoDev (DOWHILE)

let nome
let cpf

let valor = 0
let maiorValor = 0
let somaValores = 0
let valoresInseridos = 0

let opção
let saque = 0
let deposito = 0

let saldoTotal = 100

let pergunta

let media

do{
    // nome e cpf do cliente.
    nome = prompt('digite seu nome: ')
    cpf = prompt('digite seu cpf: ')
  
    valor = Number(prompt('qual o valor: '))
    if (valor > maiorValor){
        maiorValor = valor
    }
    
    somaValores += valor
    valoresInseridos += 1
    
    // opção.
    opção = prompt('Oque você deseja? (saque/deposito)')
    // saque.
    if(opção === 'saque'){
        saldoTotal -= valor
         if(valor > saldoTotal){
            console.log('dinheiro indisponível no saldo')
            break
         }else if (valor < 0){
            console.log('não conseguimos fazer saques com valores negativos.')
         }
    }
    // depósito.
    if(opção === 'deposito'){
        saldoTotal += valor
    }
    // adicionando parâmetro.
    pergunta = Number(prompt('insira (1) para continuar e (2) para parar.'))

}while(pergunta === 1)

//exibindo o saldo total.
console.log('saldo total: ' + saldoTotal)

//exibindo o maior valor inserido.
console.log('esse é o maior valor inserido: ' + maiorValor)

//exibindo média dos valores inseridos.
media = somaValores / valoresInseridos
console.log ('Media dos valores inseridos: ' + media)




