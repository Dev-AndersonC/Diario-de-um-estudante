// Objeto

// const User = {
//     name: "user",
//     password: "123",

//     chamaUser(){
//         console.log(this.name, this.password)
//     }
// }

// // console.log(User.name); //Utilizando propriedade para acessar o objeto

// User.chamaUser() // Chamando o metodo dentro do objeto


class User {
    name: string = "Anderson"
    age: number = 21

    // Para chamar o construtor tanto em ts quanto em js e preciso chama constructor
    constructor(name:string, age: number){
this.name = name
this.age = age
    }

    chamaUser(){
        console.log(this.name,this.age)

}}

const userA = new User("Paulo", 50)
userA.chamaUser();
