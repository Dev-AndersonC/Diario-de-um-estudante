import { DioAccount } from '../src/DioAccount'

export class CompanyAccount extends DioAccount{

    constructor(name: string, accontNumber: number){
        super(name, accontNumber)
    }

    getLoan(){
        console.log("Você pegou um emprestimo")
    }
}