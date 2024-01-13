function retornaIdade(anoNascimento){
const anoAtual = 2024
const idade = (anoAtual - anoNascimento)
if (idade >= 18) {
console.log("Você é maior de idade")
} else {
    console.log("Você e menor de idade")
}
}


(function main(){
//Ano de nascimento

retornaIdade(2005);
})()