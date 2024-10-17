//  declarando variáveis.
let cadastro
let somaDeNotas= 0
let somaDealunos = 0
let aluno = 0
let sexo = 0
let nota = 0
let homensNotas = 0
let mulheresNota7 = 0
let homemMaiornota = 0

// cadastro.
cadastro = prompt("deseja se cadastrar: (sim/nao)")
while(cadastro === 'sim') {
    // nota e sexo do aluno
    nota = parseFloat(prompt('digite sua nota: '))
    sexo = prompt('digite seu sexo: ')

    // definindo a quantidade de alunos.
    if(sexo === 'm' || sexo === 'f') {
        aluno += 1
    }

    // quantos homens enviaram as notas, e qual a maior nota entre os homens.
    if(sexo === 'm'){
        homensNotas += 1
        if(nota > homemMaiornota){
            homemMaiornota = nota}
    }

    // quantas mulheres tiveram nota maior que 7
    if(sexo === 'f' && nota >= 7){
        mulheresNota7 += 1   
    }
 
    // exibindo a nota e o sexo do aluno.
    console.log('Nota: ' + nota)
    console.log('Sexo: ' + sexo)
    // fazendo a soma de notas.
    somaDeNotas += nota 
    // adicionando uma condição para permanecer no while, ou sair dele.
    cadastro = prompt("deseja cadastrar outra nota? 'sim'/'nao ")
}
// exibindo a media
let media
media = somaDeNotas / aluno
console.log('media geral dos alunos é: ' + media)

// exibindo quantos homens eviaram as notas
console.log('quantidade de homens que enviaram suas notas: ' + homensNotas)

// exibindo as mulheres que tiveram a nota acima de 7
console.log('quantidade de mulheres que tiveram nota acima de 7: ' + mulheresNota7)

// exibindo qual a maior nota entre os homens
console.log('A maior nota entre os homens é:' + homemMaiornota)





