/*
📌 Estruturas de Controle  
Exercício 1:  
Escreva um programa que:  
Use if/else para verificar se um número é positivo, negativo ou zero.  
Use um loop for para imprimir os números de 1 a 10.  
Use um loop while para calcular a soma dos números de 1 a 5.  
*/

// if/else
let numero = 4;

if (numero > 0) {
    console.log('Número positivo!');
} else if (numero < 0) {
    console.log('Número negativo!');
} else {
    console.log('Número zero!');
}

// for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while
let soma = 0;
let i = 1;

while (i <= 5) {
    soma += i;
    i++;
}

/*
Exercício 2:  
Crie um sistema de menu usando switch-case:  
Se o usuário digitar "A", exiba "Opção A selecionada".  
Se digitar "B", exiba "Opção B selecionada".  
Para outras entradas, exiba "Opção inválida".  
Use um loop do-while para repetir o menu até o usuário digitar "S" (saída).  
*/

let opcao;

do {
    opcao = prompt('Digite uma opção (A, B ou S): ');

    switch (opcao) {
        case 'A':
            console.log('Opção A selecionada');
            break;
        case 'B':
            console.log('Opção B selecionada');
            break;
        case 'S':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida');
    }
} while (opcao !== 'S');
