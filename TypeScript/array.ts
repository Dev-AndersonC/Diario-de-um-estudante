// Trabalhando com array

// Colocar a tipagem no array
const array: Array<number> = [1,2,3,4,5,6]

const arryString: Array<string> = ["Segunda", "Sexta"]

// console.log(array[0])
arryString.push("Terça")
arryString.push("Quarta")
arryString.push("Quinta")
// arryString.pop()
// console.log(arryString.length)
// console.log(arryString[3])


// const buscaNum = array.find(n => n === 4)


// arryString.forEach(diaSem => {if(diaSem == "Segunda") {
//     console.log("Hoje e segunda")
// }})

array.map(num => console.log(num)) // map pode ser usado com funções Assincronas, map e um pouco mais rapido.
