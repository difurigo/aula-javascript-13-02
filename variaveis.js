/*
📌 Variáveis e Tipos de Dados  
Exercício 1:  
Crie um script que declare as seguintes variáveis:  
nome (string com seu nome completo).  
idade (número inteiro).  
aprovado (boolean indicando se você está aprovado em um curso fictício).  
notas (array com três números representando notas de provas).  
usuario (objeto com email e senha como propriedades).  
Imprima todas as variáveis no console e explique a diferença entre null e undefined em comentários.  
*/

const nome = 'Diego Furigo do Nascimento';
let idade = 19;
let aprovado = true;
let notas = [10, 8.3, 7.7];
usuario = {
  email: 'furigo9diego@gmail.com',
  senha: '**************'
};

console.log(`Nome: ${nome}, Idade: ${idade}, Aprovado: ${aprovado}, Notas: ${notas}, Usuário: ${usuario}`);
// null é um valor especial que indica a ausência de valor, mas ainda assim deve ser instanciado como uma variável (ex: let idade = null;)
// Enquanto undefined é um valor especial que indica que uma variável não foi inicializada (ex: let idade;)

/*
Exercício 2:  
Crie duas variáveis:  
valorNulo intencionalmente definida como null.  
valorIndefinido declarada sem atribuição.  
Faça uma condicional que verifica se cada variável é null ou undefined e imprima o resultado.  
*/

let valorNulo = null;
let valorIndefinido;

if (valorNulo === null) {
    console.log('Valor Nulo');
} else if (valorNulo === undefined) {
    console.log('Valor Indefinido');
} else {
    console.log('Valor Atribuído!');
}
