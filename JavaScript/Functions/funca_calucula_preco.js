(function main(){
LogicaEtiqueta(4,100)

})()


function LogicaEtiqueta(metodoPagamento, valorEtiqueta){
if(metodoPagamento == 1){
     calculaValor(valorEtiqueta, 0.1)
} else if (metodoPagamento == 2){
     calculaValor(valorEtiqueta, 0.15)
} else if (metodoPagamento == 3) { 
    console.log(valorEtiqueta)

} else {
    console.log("Valor invalido")
}
}


function calculaValor(valorEtiqueta, valorJuros) {
    console.log(valorEtiqueta - (valorEtiqueta * valorJuros))
}