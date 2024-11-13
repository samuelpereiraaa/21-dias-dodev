// criando a classe livro
class Livro {
    Titulo 
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade

    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = anoDePublicacao
        this.Disponibilidade =  true
    }
}
// criando alguns livros e adicionando ao array

let arrayLivros = []

arrayLivros.push (new Livro('Dom quixote', 'Miguel de Cervantes', 'collen hover', 1605))

arrayLivros.push (new Livro('1984', 'George orwell', 'Cabral', 1945))

arrayLivros.push ( new  Livro('Orgulho e Preconceito', 'Jane Austen', 'Lula', 1813))

// criando classe biblioteca

class Biblioteca {
    Nome 
    Endereco
    Telefone
    AcervoDeLivros = []

    constructor (nome, endereco, telefone, acervo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoDeLivros = acervo
    }
    
    // metodo para buscar livro pelo titulo
    buscarLivroPeloTitulo(titulo) {
        this.AcervoDeLivros.forEach (x => {
            if (x.Titulo == titulo){
                console.log(x)
            }
        })
    }

    // metodo empréstimo de livro
    emprestimolivro(titulo){
        let emprestado = false
        this.AcervoDeLivros.forEach (x => {
            if  (x.Titulo == titulo){
                if(x.Disponibilidade == true){
                    x.Disponibilidade = false
                    emprestado = true
                    console.log('livro emprestado')  
            } }})

if (emprestado){
    return true
} else {
    return false
}
   } 

   // metodo devolução de livro
    devolverLivro (titulo) {
        arrayLivros.forEach (x => {
        if  (x.Titulo == titulo){
             x.Disponibilidade = true
             console.log('livro devolvido')
        
        }})
    
}
}
// criando um objeto da classe biblioteca e chamando os métodos

let bibliotecaSamuel = new Biblioteca ('samuel', 'helio', '8299', arrayLivros)

 bibliotecaSamuel.buscarLivroPeloTitulo ('Orgulho e Preconceito')
 bibliotecaSamuel.emprestimolivro ('1984')
 bibliotecaSamuel.devolverLivro ('1984')