// Como podemos melhorar esse código usando TS? 
interface Pessoa {
    nome: string, 
    idade: number, 
    oficio: Oficio
}
enum Oficio {
    Atriz,
    Pedreiro
}
let pessoa1: Pessoa = {
    nome : "maria",
    idade : 29,
    oficio : Oficio.Atriz
}
let pessoa2: Pessoa = {
    nome : "roberto",
    idade : 19,
    oficio : Oficio.Pedreiro
}
let pessoa3: Pessoa = {
    nome : "laura",
    idade : 32,
    oficio : Oficio.Atriz
}
let pessoa4: Pessoa = {
    nome : "carlos",
    idade : 19,
    oficio : Oficio.Pedreiro
}