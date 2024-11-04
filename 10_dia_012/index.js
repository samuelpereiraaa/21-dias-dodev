//declarando variáveis
let nome = []
let senha = []
let contador = 0

let inserirNome
let inserirSenha

let continuar = true

while(continuar){
let alternativa = parseInt(prompt('Oque deseja fazer: 1 - cadastrar. / 2 - fazer login. / 3 - excluir um cadastro. / 4 - encerrar o programa.'))

    switch(alternativa) {
    //solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
    case 1: 
        inserirNome = prompt ('digite seu nome: ')
        inserirSenha = prompt('digite sua senha: ')
        nome[contador] = inserirNome
        senha[contador] = inserirSenha

        contador++

        break
        
    case 2:
    // Login, verificando se o nome e senha ja estão cadastrados. 
        inserirNome = prompt ('digite seu nome: ')
        inserirSenha = prompt('digite sua senha: ')
        let login = false

        for (let i = 0; i<nome.length;i++){
            if (inserirNome == nome[i] && inserirSenha ==  senha[i]){
                login = true
            }
        }

        if(login){
            alert('login correto, Seja bem vindo!')
        }else{
            alert('nome ou senha incorretos!')
        }
        break

    case 3: 
    // excluindo um cadastro
    
    let nomeExcluido = prompt('digite o nome que deseja excluir: ')
    let nomeExcluir = []
    let senhaExcluir = []
    let contadorExcluir = 0

    for(let i = 0; i < contador; i++){
        if(nomeExcluido == nome[i]){
            alert('Cadastro excluido com sucesso!')
        }else {
            nomeExcluir[contadorExcluir] = nome[i]
            senhaExcluir[contadorExcluir] = senha[i]
            contadorExcluir++
        }

      nome = nomeExcluir
      senha = senhaExcluir
      contadorExcluir--
      break
    }
    // adicionando uma opção de saida
    case 4:
        continuar = false
        break

    default:
        console.log('número inválido.')  
        break  
}
}
