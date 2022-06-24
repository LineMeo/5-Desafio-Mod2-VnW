// Crie um array que receba 5 itens e exiba no console.
let itens = ['Armário', 'Fogão', 'Mesa', 'Panela', 'Escova']
console.log(itens)

// Utilize um método para adicionar um nome ao inicio do array.
let nome = ['Marques', 'Eloi', 'de']
nome.unshift('Aline')
console.log(nome)

// Utilize um método para remover o último nome do array.
nome.pop()
console.log(nome)

// Utilize um método para adicionar dois nomes ao fim do array.
nome.push('de', 'Oliveira')
console.log(nome)

// Utilize um método para remover o primeiro nome do array.
nome.shift()
console.log(nome)

// Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]

numbers.sort(function(a, z) {
    return (a - z)
})
console.log(numbers.sort())