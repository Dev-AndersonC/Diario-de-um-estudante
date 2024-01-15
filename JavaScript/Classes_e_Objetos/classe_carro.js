class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca,cor,gasto_medio){
        this.marca = marca
        this.cor = cor
        this.gastoMedio = gasto_medio
    }

    exibirVeiculo(){
        console.log(`Marca: ${this.marca}, Cor: ${this.cor}`)
    }

    calculaKilometroPercorrido(distancia){
        const resultado = this.gastoMedio * distancia
        console.log(`O gasto de combustivel para percorre ${distancia}Km é de  ${resultado}`)
    }
}


(function main(){
distancia = 100
const carro = new Carro("Fiat", "Prata", 20)
carro.exibirVeiculo()
carro.calculaKilometroPercorrido(distancia)
})()