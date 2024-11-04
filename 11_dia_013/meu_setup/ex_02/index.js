// criando minha classe de carro.
class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }
// adicionando um metodo para retornar o calculo de distancia.
    metodoDistancia(distancia){
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado
    }
}
// criando meu objeto
const mercedes = new Carro ('mercedes', 300, 250, 4)
console.log(mercedes)
// retornando o valor de distância através do método.
let distancia = parseInt(prompt('informe a distância em metros: '))
console.log((mercedes.metodoDistancia(distancia)))

// classe corrida.
class Corrida {
    constructor(nome, tipo, distancia){
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ""
    }
    // adicionando metodo para definir o vencedor.
    decidirVencedor(){
        let menorTempo = this.participantes[0].metodoDistancia(this.distancia)
        let vencedor = this.participantes[0]
        
        for(let i = 0; i<this.participantes.length;i++){
            let tempo = this.participantes[i].metodoDistancia(this.distancia)
            if(tempo<menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor  
    }
    // metodo para alertar o vencedor.
    exibirVencedor(){
        alert(`${this.vencedor.nome} é o vencedor!`)
    }
} 

// criando uma corrida.
let corrida1 = new Corrida ('circuito_silverstone', 'formula_1', 6000)
// populando um array de participantes
corrida1.participantes[0] = new Carro ('ferrari', 800, 340, 3) 
corrida1.participantes[1] = new Carro ('mercedes', 300, 250, 4)
corrida1.participantes[2] = new Carro ('mclaren', 720, 341, 3)
// chamando os metodos para definir o vencedor da corrida.
corrida1.decidirVencedor()
corrida1.exibirVencedor()


