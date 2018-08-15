/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'campeonato de várzea';
  console.log(
    championship
  );

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Tabajara F.C', 'Xurupita F.C', 'Bigode Grosso F.C', 'Coração Cansado F.C', 'Nada Consta F.C']; 
  console.log(
    'Times que estão participando do campeonato: ' + teams 
  );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition( receivePosition ) {
  if( receivePosition <= teams.length ) {    
    return 'O time que está em ' + receivePosition + 'º lugar é o ' + teams[ receivePosition - 1 ] + '.';
  } else {
    return 'Não temos a informação do time que está nessa posição.';
  }  
};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition( 1 )); // "O time que está em 1º lugar é o Tabajara F.C."
console.log(showTeamPosition( 2 )); // "O time que está em 2º lugar é o Xurupita F.C."
console.log(showTeamPosition( 3 )); // "O time que está em 3º lugar é o Bigode Grosso F.C."
console.log(showTeamPosition( 4 )); // "O time que está em 4º lugar é o Coração Cansado F.C."
console.log(showTeamPosition( 6 )); // "Não temos a informação do time que está nessa posição."

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contadora = 20;
while( contadora <= 30 ) {
  console.log(
    contadora++
  );
}
  
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex( recebeStringCor ) {
    switch( recebeStringCor ) {
      case 'red':
        return 'O hexadecimal para a cor red é #FF0000';
        break;
      case 'green':
        return 'O hexadecimal para a cor green é #008000';
        break;
      case 'blue':
        return 'O hexadecimal para a cor blue é #FF0000';
        break;
      case 'yellow':
        return 'O hexadecimal para a cor yellow é #FFFF00';
        break;
      case 'white':
        return 'O hexadecimal para a cor white é #000000';
        break;
      default: 
        return 'Não temos o equivalente hexadecimal para ' + recebeStringCor + '.';
    }    
};
    
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('red'); // "O hexadecimal para a cor red é #FF0000"
convertToHex('green'); // "O hexadecimal para a cor green é #008000"
convertToHex('blue'); // "O hexadecimal para a cor blue é #FF0000"
convertToHex('yellow'); // "O hexadecimal para a cor yellow é #FFFF00"
convertToHex('white'); // "O hexadecimal para a cor white é #000000"
convertToHex('black'); // "Não temos o equivalente hexadecimal para black."
convertToHex('pink'); // "Não temos o equivalente hexadecimal para pink."
convertToHex('gray'); // "Não temos o equivalente hexadecimal para gray."
