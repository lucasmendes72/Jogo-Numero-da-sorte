const menorValor = 10;
const maiorValor = 20;

const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor - menorValor) + menorValor);
}

console.log('Número Secreto:',numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;