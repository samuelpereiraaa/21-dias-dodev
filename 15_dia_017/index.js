// criando a classe do hotel
class Hotel {
    Id
    NomeHotel 
    Categoria
    Endereco
    Telefone
    constructor(id, nomeHotel, categoria, endereco, telefone) {
        this.Id = id
        this.NomeHotel = nomeHotel
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
} 

// criando a classe da reserva
class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida

    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

// Arrays
let arrayHotel = []
let arrayReserva = []

let idHotel = 1
let idReserva = 1




// function cadastro hotel
function cadastroHotel () {

    let id = prompt ('digite o id: ')
    let nomeHotel = prompt ('digite o nome do hotel: ')
    let categoria = prompt ('digite sua categoria: ')
    let endereco = prompt ('digite seu endereço: ')
    let telefone = prompt ('digite seu telefone: ')

    let objetoHotel = new Hotel (id, nomeHotel, categoria, endereco, telefone)
    idHotel++

    arrayHotel.push(objetoHotel) 
}

// function cadastro reserva
function reserva () {

    let idHotel
    let continuar = true
    
    do {
        idHotel = parseInt(prompt('digite o ID do hotel: '))

        for(let i = 0; i<arrayHotel.length;i++){
            if (idHotel == arrayHotel[i].Id){
                i = arrayHotel.length
                continuar = false
            }else {
                console.log('Id nao cadastrado.')
            }
                
        }
    }while(continuar)

    let responsavel = prompt ('digite o nome do responsável: ')
    let diaEntrada = parseInt(prompt('digite o dia de entrada '))
    let diaSaida

    do {
        diaSaida = parseInt(prompt('digite o dia de saida '))
        if (diaSaida<diaEntrada) {
            console.log('o dia de saida, deve ser maior que o dia de entrada !!!')
        }
    }while(diaSaida<diaEntrada)

    let objetoReserva = new Reserva (idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++

    arrayReserva.push(objetoReserva)
     
}
// function para procurar reservas pelo Hotel
function procurarReservasPeloHotel (idHotel) {
       arrayReserva.forEach(x => {
        if(idHotel == x.idHotel){
           let i = idHotel - 1 
           console.log (`nome do hotel ${arrayHotel[i].NomeHotel}`)
           console.log (`nome do responsavel da reserva ${arrayReserva[i].Responsavel}`)
           console.log (`dia de entrada: ${arrayReserva[i].DiaEntrada}`)
           console.log (`dia de saida: ${arrayReserva[i].DiaSaida}`)     
        }})
}

// function para exibir hotel pela reserva
function exibirHotelPelaReserva (idReserva) {
        
    let idHotel = arrayReserva[idReserva -1].idHotel

            console.log (`nome do hotel ${arrayHotel[idHotel - 1].NomeHotel}`)
            console.log (`endereço; ${arrayHotel[idHotel - 1].Endereco}`)
            console.log (`dia de entrada: ${arrayReserva[idReserva - 1].DiaEntrada}`)
            console.log (`dia de saida: ${arrayReserva[idReserva - 1].DiaSaida}`)     
   
}

// function para procurar reserva pelo responsavel

function responsavelPelaReserva (responsavel) {
    
    for(let i = 0; i<arrayReserva.length;i++){
        if (responsavel == arrayReserva[i].responsavel){
            console.log ('id da reserva ' + arrayReserva[i].Id)
            console.log ('hotel: ' + arrayHotel[(arrayReserva[i].idHotel)].NomeHotel)
        }}
}

// function para procurar hoteis associados a categoria inserida

function buscarHotelPorCategoria (categoria) {
    let hoteisEncotrados = []
    for(let i = 0; i<arrayHotel.length; i++){
        if (categoria == arrayHotel[i].Categoria) {
            hoteisEncotrados.push(arrayHotel[i].NomeHotel)
        }
    }
    return hoteisEncotrados
}

// function para atualizar o telefone de cadastro

function atualizarTelefone (idHotel, telefone) {
    arrayHotel[idHotel - 1].Telefone = telefone
}
// -------------------------------------------------------------------------------------------------------------------------- //

// FLUXO DE FUNCIONAMENTO DO CÓDIGO! 
// o usuário decide quando encerrar o programa

let condicao = true

while (condicao) {
    console.log ('---------- HOTEL_CALANGO ----------')

    let alternativa = parseInt(prompt ('1 - cadastro de hotel\n 2 - reserva\n 3 - procurar reservas pelo hotel\n 4 - exibir hotel pela reserva\n 5 - responsável pela reserva\n 6 - procurar hotel pela categoria\n  7 - atualizar telefone de cadastro\n 8 - sair do programa '))
    
    switch(alternativa) {

        // cadastro
        case 1: 
            cadastroHotel()
            break
       
        // reserva
        case 2: 
            reserva ()
            break
        
        // procurar reserva pelo hotel
        case 3: 
            let idHotel = parseInt(prompt('digite o Id do hotel cadastrado: '))    

            procurarReservasPeloHotel(idHotel)
            break
        
        // exibir hotel pela reserva
        case 4: 
            let idReserva = parseInt(prompt('digite o Id da sua reserva: '))
            
            exibirHotelPelaReserva(idReserva)
            break
        
        // responsavel pela reserva 
        case 5: 
            let responsavel = prompt('digite o nome do responsável: ')
            
            responsavelPelaReserva(responsavel)
            break
        
        // procurar hotel pela categoria
        case 6: 
            let categoria = prompt('digite sua categoria: ')
            
            buscarHotelPorCategoria(categoria)
            break
        
        // atualizar telefone de cadastro 
        case 7: 
            idHotel = parseInt(prompt('digite o Id do hotel cadastrado: '))
            let telefone = parseInt(prompt('digite seu telefone: '))

            atualizarTelefone(idHotel, telefone)
            break
        
        // encerrando programa 
        case 8: 
            condicao = false
            continue
            
        default:
            console.log('opção inválida!')
            break    
     }
}