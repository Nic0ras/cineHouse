//versão do mesmo arquivo "cinema", mas utilizando o JSON

//arquivo principal do programa.

const Filme = require('./filme')
const funcoes = require('./funcoes');
const catalogo = require ('./database/catalogo.json')
const nomeArquivo = './database/catalogo.json'
// const fs = require('fs'); // já fora utilizado o módulo fs


const cinema = 'DH - Movies';

console.log(cinema)


console.log(new Filme(1, "Harry Potter", 90, [], 2001, false));


// const catalogo = []; //catalogo já existnte no banco de dados 

//apagado pois as funções já estão dentro do 'catalogo' (db)
// funcoes.adicionarFilme( new Filme(1,'Harry Potter',90,['Daniel Radclif'],2001,false), catalogo);
// funcoes.adicionarFilme( new Filme(2,'Codigo de conduta',180,['Vin Diesel'],2011,false), catalogo);
// funcoes.adicionarFilme( new Filme(3,'Animais Fantásticos',120,['Erza Miller'],2021,true), catalogo);
// funcoes.adicionarFilme( new Filme(4,'Velozes e Furiosos 27',90,['Vin Diesel'],2002,true), catalogo);

//abaixo está comentado pois o arquivo já foi escrito.
// fs.writeFileSync('./database/catalogo.json', JSON.stringify(catalogo, null, 2)) // (null & 2 trazem os dados formatados no arquivo JSON.)



console.log(catalogo);

console.log('o filme encontrado foi: ' + funcoes.buscarFilme(3, catalogo).titulo);

funcoes.adicionarFilme(new Filme(5, "Harry Potter 2", 190, [], 2011, false), catalogo, nomeArquivo )

funcoes.alterarStatusEmCartaz(1, catalogo)
console.log(funcoes.buscarFilme(1, catalogo))

