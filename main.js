class Pessoa{
    #nome
    #idade
    constructor(obj){
        this.#nome=obj.nome
        this.#idade=obj.idade
    }
    
    getNome(){
        return this.#nome
    }
    setNome(value){
        this.#idade=value
    }
    getIdade(){
        return this.#idade
    }
    setIdade(value){
        this.#idade=value
    }
    imprimirNome(){
        console.log(this.getNome())
    }

}

//const p = {nome: '', idade: 27, phone: 989898989}
//console.log(p)
console.log('-------------------EX1---------------------------------------')
const pessoa1= new Pessoa({nome: 'Renato', idade: 27})

//Exercicio 1
pessoa1.imprimirNome()

console.log('----------------EX2------------------------------------------')
//Exercicio 2
const vetor = [
    new Pessoa({nome: 'Renato', idade: 27}),
    new Pessoa({nome: 'Ricardo', idade: 28}),
    new Pessoa({nome: 'Tiago', idade: 21}),
    new Pessoa({nome: 'MiguelLima', idade: 15}),
    new Pessoa({nome: 'Joao', idade: 26}),
    new Pessoa({nome: 'Camarao', idade: 69}),
    new Pessoa({nome: 'Pedro', idade: 27}),
    new Pessoa({nome: 'Tatiana', idade: 32}),
    new Pessoa({nome: 'Antonio', idade: 15}),
    new Pessoa({nome: 'Antonino', idade: 6}),
]

    console.log(vetor)
    console.log('----------------------EX3------------------------------------')   
//Exercicio 3
    for (let index = 0; index < vetor.length; index++) {
        if (vetor[index].getIdade()>18) {
            console.log(vetor[index].getNome())   
        }
    }

//Exercicio 4
function adicionarLi(i){
    const list3 = document.querySelector('ul')
    const liEl = document.createElement('li')

    liEl.textContent=`${vetor[i].getNome()} - ${vetor[i].getIdade()}`
    list3.append(liEl)
}

adicionarLi(0)

console.log('-------------------------EX5---------------------------------')

//Exercicio 5
vetor.sort((a,b)=>{
    return b.getIdade()-a.getIdade()
});
vetor.forEach((p) => {
    console.log( `${p.getNome()} - ${p.getIdade()}`)
});

console.log('-------------------------EX6---------------------------------')

function redGreen(){
    const list3 = document.querySelector('ul')

    for (let index = 0; index < vetor.length; index++) {
        const liEl = document.createElement('li')
        const liElRed=document.createElement('li')

        if (vetor[index].getIdade()>=18) {
                liEl.textContent=`${vetor[index].getNome()} - ${vetor[index].getIdade()}`
                liEl.style.color="Green" 
                list3.append(liEl)
  
        }else{
            liElRed.textContent=`${vetor[index].getNome()} - ${vetor[index].getIdade()}`
            list3.append(liElRed)
            liElRed.style.color="Red" 
        }
    }
}
redGreen()
console.log('-------------------------EX7---------------------------------')

vetor.sort((a, b) => {
    let fa = a.getNome().toLowerCase(),
        fb = b.getNome().toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
vetor.forEach((p) => {
    console.log(`${p.getNome()} ${p.getIdade()}`);
});
console.log('-------------------------EX8---------------------------------')
const btn = document.querySelector('button')
btn.onclick = random;

function random(){

}