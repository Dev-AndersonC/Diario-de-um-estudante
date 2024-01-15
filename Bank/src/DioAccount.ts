
export abstract class Account {
    name: string
    accountNumber: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposito = () => {
        console.log("Você depositou")
    }

    withdraw = () => {
        console.log("Você sacou")

    }
    
        getValue(){
        }
}