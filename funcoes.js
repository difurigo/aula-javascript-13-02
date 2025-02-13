/*
📌 Funções e Escopo  
Exercício 1:  
Crie uma função tradicional converterParaMaiusculas que recebe uma string e retorna ela em maiúsculas.  
Reescreva-a como arrow function.  
Declare uma variável mensagem dentro da função e tente acessá-la fora. Explique o erro em comentários.  
*/

function converterParaMaiusculas(string) {
    // let mensagem = 'Mensagem';
    return string.toUpperCase();
}

const converterParaMaiusculas = (string) => string.toUpperCase();

// A variável mensagem não pode ser acessada fora da função, pois ela foi declarada dentro do escopo da função.

/*
Exercício 2:  
Crie uma função processarDados que aceita um callback como parâmetro (ex: imprime "Processo concluído").  
Implemente uma função assíncrona buscarUsuario que retorna um objeto { nome: "Fulano", id: 1 } após 1 segundo. Use .then() para exibir o resultado.  
*/

const callback = () => console.log('Processo concluído');

function processarDados(callback) {
    console.log('Processando...');
    callback();
}

async function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ nome: 'Fulano', id: 1 });
        }, 1000);
    });
}

buscarUsuario().then(console.log);
