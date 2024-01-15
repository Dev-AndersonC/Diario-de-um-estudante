//Para executar o typeScript e preciso transpilar para um arquivo js
// Podemos colocar uma biblioteca para não precisar ficar convertendo o arquivo ts, toda vez que for necessario testar


// Declarando variaveis
// var a = "a"; // var possui um escopo global (Pouco ultizada contem muitos riscos)
// let b = "b"; // let e uma variavel mutavel 
// const c = "c"; // const são constantes seu valor não pode ser alterado


// Deixe explicito o tipo da variavel em sua criação
// Tipos primitivos
// let nome: string = "Anderson"
// let idade: number = 21
// let aprendendoTs: boolean = true
// let doisTipos: string|number = 2
// doisTipos = "Hello"
// let m : any = 2, Any significa que essa variavel recebe qualquer tipo

// --------------------------------------------------------------------------------------------->
// Objetos - objetos literais
// Passando ? em uma proprieda de um objeto, faz aquela propriedade ser opcional.


interface Pessoa {
    nome: string,
    idade: number,
    email?: string
}


const pessoa: Pessoa = {
    nome: "Anderson",
    idade: 21
}

const pessoa1: Pessoa = {
    nome: "Paulo",
    idade: 25,
    email: "email@email.com"
}

// Declara um array de objeto
const ArrayPerson: Array<Pessoa> = [
 pessoa,
 pessoa1
]

// Array de numeros
const arrayNum: Array<number> = [
    1,2,3,4,5.0
]