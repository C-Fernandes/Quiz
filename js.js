const perguntas = [
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: ["let myVar;", "var myVar;", "const myVar;"],
        correta: 1
    },
    {
        pergunta: "Qual é a função utilizada para imprimir algo no console em JavaScript?",
        respostas: ["print();", "log();", "console.log();"],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
        respostas: ["function myFunction() {};", "myFunction = function() {};", "let myFunction = () => {};"],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: ["push()", "add()", "append()"],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: ["==", "===", "!="],
        correta: 1
    },
    {
        pergunta: "Como você verifica se um valor é do tipo array em JavaScript?",
        respostas: ["isArray(myArray);", "myArray.isArray();", "Array.isArray(myArray);"],
        correta: 2
    },
    {
        pergunta: "Qual é a palavra-chave usada para criar um loop em JavaScript?",
        respostas: ["for", "loop", "repeat"],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de comentar várias linhas em JavaScript?",
        respostas: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: ["pop()", "remove()", "deleteLast()"],
        correta: 0
    },
    {
        pergunta: "Como você declara uma constante em JavaScript?",
        respostas: ["let", "const", "var"],
        correta: 1
    }
];

const template = document.querySelector('template');
const quizItem = template.content.cloneNode(true)

for (let item of perguntas) {
    alert(item.pergunta)

}