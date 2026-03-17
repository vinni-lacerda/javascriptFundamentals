/*Atividade: Análise de Números em um Array

Crie um programa em JavaScript que analisa um conjunto de números.

Dados iniciais

Use o seguinte array:

const numbers = [12, 5, 8, 19, 3, 14, 7, 10];
Requisitos

Percorra o array e conte:

Quantos números são pares

Quantos números são ímpares

Percorra o array novamente e conte:

Quantos números são maiores que 10

Descubra qual é o maior número do array.

Descubra qual é o menor número do array.

Calcule a soma de todos os números.

Calcule a média dos valores.

No final, imprima um resumo no console com todas as informações calculadas.

Requisitos técnicos

Utilize:

array

loop for

condicionais (if / else)

variáveis para acumular valores

Exemplo de saída esperada (estrutura)
Even numbers: X
Odd numbers: X
Numbers greater than 10: X
Highest number: X
Lowest number: X
Sum: X
Average: X*/

const numbers = [12, 5, 8, 19, 3, 14, 7, 10];
let even = 0;
let odd = 0;
let greaterThanTen = 0;
let sum = 0;
let max = numbers[0];
let min = numbers[0];

for(let i = 0; i<numbers.length; i++){
    numbers[i] % 2 == 0 ? even++ : odd++;
    if(numbers[i] > 10){greaterThanTen++;}
    if(numbers[i] > max){max = numbers[i];}
    if(numbers[i] < min){min = numbers[i];}
    sum += numbers[i];
};

let average = sum/numbers.length;

console.log(`Even numbers: ${even} \nOdd numbers: ${odd}\nGreater than 10: ${greaterThanTen}\nHighest number: ${max}\nLowest number: ${min}\n Sum: ${sum}\n Average: ${average}`);


