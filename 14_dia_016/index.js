let arrayNome = []
let arraySenha = []

// função de qual alternativa o usuario escolheu
function alternativa (opcoes){
    opcoes = parseInt(prompt('oque deseja fazer? 1 - cadastrar\n 2 - fazer login\n 3 - excluir cadastro\n 4 - encerrar o programa'))  
    return opcoes
}

// função de cadastro
function cadastrar(){   
    let nome = prompt('digite seu nome: ')
    let senha = prompt('digite sua senha: ')

     arrayNome.push(nome)
     arraySenha.push(senha)  
}  

// função de login
function Flogin(nome, senha){
    let indice = arrayNome.indexOf(nome)

    if(indice !== -1 && arraySenha[indice] == senha){
     
        return true 
    }else {
        console.log('nome ou senha não cadastrados !')
        return false
        
    }
}
// função para excluir cadastro
function excluirCadastro(nome){

    let indice = arrayNome.indexOf(nome)

    if ( indice !== -1 ) {
        arrayNome.splice(indice, 1)
        arraySenha.splice(indice, 1)
        console.log('cadastro excluido com sucesso!')
    } else{
        console.log('cadastro nao encontrado !')
    }
}

// adicionando fluxo de funcionamento de codigo, usando todas as funções ja criadas.
let continuar = true
while(continuar){

    let opcoes = alternativa()

    switch(opcoes){
        case 1:
            cadastrar()
            break
        case 2:
            let nome = prompt('digite seu nome: ')
            let senha = prompt('digite sua senha: ')
            let login = Flogin(nome, senha)

            if(login){
                console.log('login feito com sucesso !')
            }else {
                console.log('nome ou senha não cadastrados !')  
            }

            break
        case 3:
            nome = prompt('digite seu nome: ')
            excluirCadastro(nome)    
            break
        case 4:
            continuar = false
            break

        default: 
            console.log ('numero incorreto!')
            break    
    }
}        
