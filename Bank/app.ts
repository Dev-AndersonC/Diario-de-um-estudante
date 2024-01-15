// Clear Banking

// name, accountNumber
// depoistar, sacar

class Account {
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
}



(function main(){
const c1 = new Account("Anderson", 1)
const c2 = new Account("Pablo", 1)
})()