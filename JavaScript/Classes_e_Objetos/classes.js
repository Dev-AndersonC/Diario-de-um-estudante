class Person{
    nome;
    idade;

constructor(){

}

constructor(nome, idade){
    this.nome = nome
    this.idade = idade

}
    Descreva () {  //Para function criada em classes não e preciso adicionar a palavra reservada funtion, e preciso usar o crase para poder fazer uma string interpolada
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        
    }
}


// é ultilizado new para instanciar uma nova instancia de classe;
const Anderson = new Person()
Anderson.nome = "Anderson"
Anderson.idade = 21

Anderson.Descreva()


const Stefany = new Person("Stefany", 18)
Stefany.Descreva()