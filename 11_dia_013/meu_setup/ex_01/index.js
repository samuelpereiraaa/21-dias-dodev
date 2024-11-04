// definindo minha classe, e atribuindo parâmetros para os meus atributos.
class Pc {
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
// criando um método para mostrar as informações no console.
    detalhes(){
        return `tipo: ${this.tipo}\n processador: ${this.processador}\n video: ${this.video}\n armazenamento: ${this.armazenamento}\n memoriaRam: ${this.memoriaRam}\n ssd: ${this.ssd}`
    }
}
// criando meu objeto, através da minha classe.
let meuComputador = new Pc ('desktop', 'ryzen_5', 'dedicado', '500_gb', '16_ram', true)
// chamando meu objeto junto com o método.
console.log(meuComputador.detalhes())
