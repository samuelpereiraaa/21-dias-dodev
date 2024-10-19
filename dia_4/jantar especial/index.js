let fome = prompt('Você está com fome? sim/não')
let dinheiro = prompt('Você tem dinheiro? sim/não')
let abertoOuFechado = prompt('O restaurante esta aberto ou fechado?')

if (fome === 'não' || dinheiro === 'não'){
    console.log('Hoje a janta será em casa.')

}else if (fome === 'sim' && dinheiro === 'sim' && abertoOuFechado === 'fechado'){
    console.log('Peça um delivery!')

}else if (fome === 'sim' && dinheiro === 'sim' && abertoOuFechado === 'aberto'){
    console.log('Hoje o jantar será no seu restaurante preferido!')

}else{
    console.log('Informação inválida')
}