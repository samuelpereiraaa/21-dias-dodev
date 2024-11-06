// declarando arrays
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]
// criando função 
function numeroIguais (arrayA,arrayB){
    // array para guardar os numeros iguais
    let numeroIncomuns = []
    
    // fazendo duas estruturas de repetição, para verificar o valor das duas arrays, se tiver numeros iguais, armazene dentro da array numeroIncomuns. Usando o metodo push e includes!
    for(let i = 0; i < arrayA.length; i++){
       for(let j = 0; j< arrayB.length; j++){
        if (arrayA[i] === arrayB[j] && !numeroIncomuns.includes(arrayA[i]) ){
            numeroIncomuns.push(arrayA[i])
        }
       }     
    }
return numeroIncomuns
}
// exibindo no console
console.log(numeroIguais(arrayA,arrayB))