//  Estruturas de decisão se mantem iguais em Js

// const numero: number = 15

// if (numero > 15){
//     console.log("Num maior que 15")
// } else if (numero === 15){
//     console.log("Num igual 15")
// } else {
//     console.log("Num menor que 15")
// }


// Utilizar objetos lireis pode ser interesante para diminuir if e else, e adere simplicidade e varios fatores interresantes ao codigo
const tiposUser = {
    admin: "Seja bem vindo admin",
    student: "Você e um estudante",
    viewer: "Você pode vizualizar"
}

function validateUser(user: string){
    console.log(tiposUser[user as keyof typeof tiposUser]) //user = paramentro, as keyof = e uma chave, typeof =  para o tipo, tiposUser = usuario
}

const user = "admin";

validateUser(user)
validateUser('student')