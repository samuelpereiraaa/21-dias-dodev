let nome = prompt('Insira seu nome: ')
let idade = parseInt(prompt('Insira sua idade: '))
let peso = parseFloat(prompt('insira seu peso: '))
let altura = parseFloat(prompt('insira sua altura: '))
let profissao = prompt('Insira sua profissão: ')

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'kg')

if (idade >= 18) {
    console.log('Está liberado para tomar umas geladas.')
}else {
    console.log('Sem gelada para você.')
}

let mes = idade * 12 // idade em meses.
let semana = idade * 52 // idade em semanas.
let dia = idade * 365 // idade em dias.

console.log('Sua idade é ' + idade +', tem ' + mes + ' meses' + ', ' + semana + ' semanas, ' + dia + ' dias.')

// calculando o IMC do seu usuário e a faixa dele

let imc = peso / (altura * altura)

if (imc < 18.5 ) {
    console.log('sua faixa de IMC:' + imc + 'kg/mg2 é Magreza.')
}else if (imc >= 18.5 && imc <= 24.9) {
    console.log('sua faixa de IMC:' + imc + 'kg/mg2 é Normal.')
}else if (imc >= 24.9 && imc <= 30) {
    console.log('sua faixa de IMC:' + imc + 'kg/mg2 é Sobrepeso.')
}else if (imc > 30) {
    console.log('sua faixa de IMC:' + imc + 'kg/mg2 é Obesidade.')
}else {
    console.log("cálculo indisponível.")
}
// descobrindo o ano de nascimento
let nascimento = 2023 - idade

console.log('sua data de nascimento é: ' + nascimento)

// for loop

// deve exibir todos os anos que o usuário viveu até 2023, e depois informar a idade dele.

let anoQueNasceu = parseInt(prompt('digite o ano em que nasceu: '))
let anosIdade = 0

for( let i=0 ; anoQueNasceu <= 2023 ; i++) {
    console.log(anoQueNasceu +  '-' +  anosIdade +'anos de idade')
    anoQueNasceu++
    anosIdade++
}

// confirmar os dados !
do{
    let continuar = prompt ('Deseja inserir novos dados? (sim)/(nao)')

    if(continuar === 'sim'){
        let nome = prompt('Insira seu nome: ')
        let idade = parseInt(prompt('Insira sua idade: '))
        let peso = parseFloat(prompt('insira seu peso: '))
        let altura = parseFloat(prompt('insira sua altura: '))
        let profissao = prompt('Insira sua profissão: ')

        console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura e pesa ' + peso + 'kg')

            if (idade >= 18) {
                 console.log('Está liberado para tomar umas geladas.')
            }else {
                 console.log('Sem gelada para você.')
            }

let mes = idade * 12 // idade para meses.
let semana = idade * 52 // idade em semanas.
let dia = idade * 365 // idade em dias.

console.log('Sua idade é ' + idade +', tem ' + mes + ' meses' + ', ' + semana + ' semanas, ' + dia + ' dias.')

// delclarando Imc

let imc = peso / (altura * altura)

if (imc < 18.5 ) {
    console.log('sua faixa de IMC:' + imc + 'kg/m2 é Magreza.')
}else if (imc > 18.5 && imc < 24.9) {
    console.log('sua faixa de IMC:' + imc + 'kg/m2 é Normal.')
}else if (imc > 24.9 && imc < 30) {
    console.log('sua faixa de IMC:' + imc + 'kg/m2 é Sobrepeso.')
}else if (imc > 30) {
    console.log('sua faixa de IMC:' + imc + 'kg/m2 é Obesidade.')
}else {
    console.log("cálculo indisponível.")
}

// em que ano você nasceu
let nascimento = 2023 - idade
console.log('sua data de nascimento é: ' + nascimento)

// for loop

// deve exibir todos os anos que o usuário viveu até 2023, e depois informar a idade dele.

let anoQueNasceu = parseInt(prompt('digite o ano em que nasceu: '))

for( let i=0 ; anoQueNasceu < 2023 ; i++) {
    console.log(anoQueNasceu +  '-' +  anosIdade +'anos de idade')
    anoQueNasceu++
    anosIdade++
}
    
    }else if (continuar === 'não'){
        break
    }
    

}while(continuar === 'sim')