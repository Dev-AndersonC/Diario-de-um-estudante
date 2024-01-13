function calcularImc(peso, altura){
     return peso / Math.pow(altura,2);
}

function classificarImc(imc){

    if (imc < 18.5){
        return('Abaixo do peso')} 
        else if (imc >= 18.5 && imc < 25){
        return('Peso Normal');} 
        else if (imc >= 25 && imc < 30){
        return("Acima do peso");}
        else if (imc >= 30 && imc < 40){
        return("Obeso");} 
        else{
        return("Obesidade grave");

    }

}


(function main(){
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso,altura);
    const classificacaoImc = classificarImc(imc)
    
    console.log(classificacaoImc)
    
})() // colocando a função main que criamos dentro de uma () e chamando um () ao lado, nos criamos uma função que e imediatamente invocada durante a sua execução. -> Pode ser uma mão na roda para facilitar a execução de codigos onde queremos que os codigo na main sejam invocados.



// main() //funções são valores/Objetos então podemos referencialos, 