// declarando variáveis.
let nome = prompt('digite seu nome: ')
let idade = parseInt(prompt('digite sua idade'))
let salarioAtual = parseFloat(prompt('digite seu salário atual: '))

console.log('nome: ' +nome+'\nidade: '+idade+'\nsalário atual: '+salarioAtual)

// confirmando registro.
let confirmar
do{
    confirmar = prompt('confirmar alterações? (sim)/(nao)')
        if (confirmar === 'sim'){
        console.log('Muito bem!\n') 

        }else if (confirmar === 'nao') {
        let nome = prompt('digite seu nome: ')
        let idade = parseInt(prompt('digite sua idade'))
        let salarioAtual = parseFloat(prompt('digite seu salário atual:'))
        
        console.log('nome: ' +nome+'\nidade: '+idade+'\nsalário atual: '+salarioAtual) 
        break
     }        
}while(confirmar === 'nao')

// previsão do salário para os próximos 10 anos
let ano = 2024
let aumentoSalario = 0.015 // ajuste de 1.5% 

for(let i = 0; i<=10 ; i++){   
    salarioAtual += salarioAtual * aumentoSalario
    
    console.log(ano + ' -' +' = R$ ' + salarioAtual)
    ano += 1
    aumentoSalario *= 2
    
}