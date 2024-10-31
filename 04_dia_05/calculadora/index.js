let number1 = Number(prompt('digite um número: '))
let number2 = Number(prompt('digite outro número: '))
let resultado
let operador= prompt("Digite um dos operadores: '+' '-' '*' '/'' ")

switch(operador) {

    case '+':
        resultado = number1+number2
        console.log('resultado: ' + resultado)
        break
    case '-':
        resultado = number1 - number2
        console.log('resultado: ' + resultado)
        break
    case '*':
        resultado = number1 * number2
        console.log('resultado: ' + resultado)
        break
     case '/':
        if(number1 !== 0) {
            resultado = number1 / number2
            console.log('resultado: ' + resultado)
        }else {
            console.log('O numero 0 não pode ser dividido!')
        }
        break
        
    default:
        console.log('Operação inválida, tente novamente!')
        break
}