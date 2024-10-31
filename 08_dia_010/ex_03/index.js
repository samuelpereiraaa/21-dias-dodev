let numeroInserido = parseInt(prompt('digite um numero inteiro e positivo'))
fibonacci = []
fibonacci[0] = numeroInserido - 1
fibonacci[1] = numeroInserido

for(let i = 2; i < 10 ; i++) {
    
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]

}
console.log('Fibonacci: ' + fibonacci)



  


    



