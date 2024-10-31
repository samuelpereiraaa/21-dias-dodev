let aluno = []
let arrayNota = []
let continuar = true
let contador = 0
let somaNotas = 0
while(continuar) {

    let nome = prompt('digite o nome do aluno: ')
    let nota = Number(prompt('digite sua nota: '))
    somaNotas += nota

    aluno[contador] = nome
    arrayNota[contador] = nota

    contador++

    let confirmar = prompt('deseja continuar? (s) / (n)')
        if(confirmar === 'n') {
        continuar = false
        continue
        }
}
// exibindo a nota de cada aluno:
for(let i = 0; i<aluno.length ; i++){
    console.log(aluno[i] + '-' + arrayNota[i])
}
// soma da notas: 

console.log('soma geral das notas: ' + somaNotas)
// média geral da turma:
let media = somaNotas / aluno.length
console.log('média geral da turma: ' + media )
