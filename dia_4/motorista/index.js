
// Definindo as variáveis.
let nome 
let idade 
let carteiraMotorista = false
let carro = false



// Recebendo as informações nas variáveis.
nome = prompt('digite seu nome')
idade = Number(prompt('digite sua idade'))
 let opcaoCarteiraMotorista = prompt('Você possui carta de motorista? sim/não')
if(opcaoCarteiraMotorista === 'sim'){
    carteiraMotorista = true
}
 let opcaoCarro = prompt('Você possui um carro? sim/não')
if(opcaoCarro === 'sim'){
    carro = true
}

// Imprimindo os valores de acordo com as informações.
if(idade < 18 || !carteiraMotorista){
    console.log( nome + ', você não pode dirigir.')

}else if(idade >= 18 && carteiraMotorista  && !carro){
    console.log(nome + ', você pode dirigir mas não tem um carro.')

}else if(idade >= 18 && carteiraMotorista  && carro ){
    console.log( nome + ', você será o motorista!')
    
}else{
    console.log('Informação inválida')
}