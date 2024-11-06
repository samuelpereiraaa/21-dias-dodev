//funçao para perguntar nome e salario e exibir as informações
function nomeSalario(){
        let nome = prompt('qual o seu nome? ')
        let salario = parseFloat(prompt('digite seu salário: '))

        // usando uma funçao para descobrir o aumento do salário
        let aumento = calculoSalario(salario)

        // calculo para salario reajustado
        let novoSalario = salario + (salario * aumento)   

        // exibindo informaçoes
        console.log("nome do colaborador " + nome) // exibindo nome
        console.log("salário: R$ " + salario) // retornando salario
        console.log("aumento em porcetagem " + (aumento * 100).toFixed(2) + " %") // porcetagem do aumento
        console.log("salario com aumento: " + novoSalario ) // salario com aumento

        // função para perguntar se deseja fazer o calculo novamente
        pergunta()
}
// função de aumento de salario
function calculoSalario(salario){
    let aumento = 0
    if(salario <= 1.500){
        aumento = 0.20 // aumento de 20%
    }else if(salario <= 2.000){
        aumento = 0.15 // aumento de 15%
    }else if(salario <= 3.000){
        aumento = 0.10 // aumento de 10%
    }else {
        aumento = 0.05 // aumento de 5%
    }       
    return aumento 
}

// fazendo uma função que pergunta se o usuário deseja calcular novamente.
function pergunta(){ 
    let novamente = prompt('deseja calcular novamente? (s) / (n)')
    if(novamente === 's'){
        nomeSalario()
    }else {
        alert('voce saiu do programa!')
    }
}

nomeSalario()
