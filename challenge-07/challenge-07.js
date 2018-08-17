/*
Crie um array com 5 items (tipos variados).
*/
var times = [ 'time1', 'time2', 'time3', 'time4', 'time5' ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( a ) {
  times.push( a );
  return times;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( [ 'time6', true, 8 ] ); // [ 'time1', 'time2', 'time3', 'time4', 'time5', [ 'time6', true, 8 ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + times[5][1] + '.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + times.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + times[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var contadora = 10;
while( contadora <= 20 ) {
  contadora % 2 === 0 ? console.log( contadora ) : ''; 
  contadora++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var contadora = 10;
while( contadora < 20 ) {
  contadora % 2 === 1 ? console.log( contadora ) : ''; 
  contadora++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for( var contadora = 100; contadora <= 120; contadora++) {
  contadora % 2 === 0 ? console.log(contadora) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for( var contadora = 100; contadora < 120; contadora++) {
  contadora % 2 === 1 ? console.log(contadora) : '';
}
