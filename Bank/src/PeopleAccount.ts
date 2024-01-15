import { DioAccount } from '../src/DioAccount'

export class PeopleAccont extends DioAccount{
    doc_id: number

constructor(doc_id: number, name:string, AccontNumber: number){
    super(name,AccontNumber)
    this.doc_id = doc_id
}

}