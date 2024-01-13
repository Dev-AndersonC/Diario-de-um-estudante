// Aprendendo ultilzar funções em js, em Javascript para declaramos uma função ultizimos o verbo function, seu nome , seu parametros, e seu retorno;


function quadrado(valor){
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor; // Função e um pequeno trecho de codigo
    return valor + valorDeAcrecimo; // E possivel, fazer que a função não possua retorno 
}
const quadadradoDeDez = quadrado(10);


console.log(quadadradoDeDez)