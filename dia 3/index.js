// Solicitando informações para guardar nas variáveis.

let usuarioNome = prompt("digite seu nome");
let usuarioIdade = parseInt (prompt("digite sua idade"));
let usuarioAltura = parseFloat (prompt("digite sua altura"));
let usuarioPeso = parseFloat (prompt("digite seu peso"));

// Calculo para o nascimento, e o IMC.

let nascimento = 2023 - usuarioIdade;
let imc = usuarioPeso / (usuarioAltura * usuarioAltura);

// Imprimir no console as informações obtidas com as entradas de dados e os calculos.

console.log("Olá " + usuarioNome + ", você tem " + usuarioIdade + " anos, nasceu em " + nascimento + ",tem " + usuarioAltura + ", pesa " + usuarioPeso + " kg seu IMC é\n " + imc + " Kg/m2." );