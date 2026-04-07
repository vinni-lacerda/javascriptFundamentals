// Crie um irmão para elementoOndeVoceEsta.
const pai = document.querySelector('#pai');
const elementWhereYouAreBrother = document.createElement('section');
elementWhereYouAreBrother.id = 'irmao';
pai.appendChild(elementWhereYouAreBrother);

// Crie um filho para elementoOndeVoceEsta.
const elementWhereIm = document.querySelector('#elementoOndeVoceEsta')
const elementChild = document.createElement('div');
elementChild.id = 'filho';
elementWhereIm.appendChild(elementChild);

// Crie um filho para primeiroFilhoDoFilho.
const firstSonOfSon = document.querySelector('#primeiroFilhoDoFilho');
const sonOfSonChild = document.createElement('div');
sonOfSonChild.id = 'filhoPrimeiroFilhoDoFilho';
firstSonOfSon.appendChild(sonOfSonChild);

// A partir desse filho criado, acesse terceiroFilho.
const thirdSon = sonOfSonChild.parentElement.parentElement.nextElementSibling;
console.log(thirdSon);
