//todas as funcçoes que usaremos no arquivo principal
/*utiilizando o module.exports para exportar mais de uma função: Precisamos passar todas as funções
que queremos exportar, dentro de um objeto.
*/

const fs = require('fs');

module.exports = {
    
    
    adicionarFilme: function (filme, catalogo, nomeArquivo) {
    catalogo.push(filme)// além de alterar o arquivo
    fs.writeFileSync(nomeArquivo, JSON.stringify(catalogo, null, 2))//trambém rescreeve o arquivo JSON com o novo array de catalogo 
    return 'Filme adicionado com sucesso!'
},

    buscarFilme: function  (codigoFilme, catalogo) {
        for (let i = 0; i < catalogo.length; i++) {
            if(catalogo[i].codigo == codigoFilme){
                return catalogo[i]
            }
        }
    },


    alterarStatusEmCartaz: function (codigoFilme, catalogo,) {
        const filme = this.buscarFilme(codigoFilme, catalogo);
        filme.emCartaz = !filme.emCartaz;
    }
};