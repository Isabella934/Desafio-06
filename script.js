let dado = {
    nome: 'Isabella',
    idade: 19,
    signo: 'câncer'
}

dado.comida = 'macarrão'

delete dado.idade

console.log(dado)

let cadastro = [
    {
        nome: 'Felipe',
        idade: '28',
        telefone: '933451255',
        amigo: ['Luana', 'João', 'Maria', 'Júlia']
    },
    {
        nome: 'Marcela',
        idade: '39',
        telefone: '988331622',
        amigo: ['Luan', 'Isabel', 'Mario', 'Ana']
    },
    {
        nome: 'Mauro',
        idade: '45',
        telefone: '922650055',
        amigo: ['Laura', 'Dom', 'Denilson', 'Léo']
    },
    {
        nome: 'Sther',
        idade: '25',
        telefone: '999061127',
        amigo: ['Isabella', 'Jorge', 'Michael', 'Júlio']
    },
    {
        nome: 'Estrela',
        idade: '18',
        telefone: '966731357',
        amigo: ['Luana', 'João', 'Maria', 'Júlia']
    },
]

console.log(cadastro[0] .amigo[2])
console.log(cadastro[1] .amigo[0])
console.log(cadastro[2] .amigo[3])
console.log(cadastro[3] .amigo[1])
console.log(cadastro[4] .amigo[4])