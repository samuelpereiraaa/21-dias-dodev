// declarando variáveis
let numero = []
let continuar = true

let i = 0

while (continuar) {

    let receberNumero = parseInt(prompt('digite um número positivo'))
    numero[i] = receberNumero

   let confirmar = parseInt(prompt('digite 1 para inserir um novo numero.'))
    if(confirmar != 1) {
        continuar = false
        break
  
    }
    if(i >= 10){
        console.log('limite de elementos atingido.')
        break
    }   

    i++
}

console.log(numero)



