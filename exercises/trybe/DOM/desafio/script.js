//Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura inicial apresentada a seguir.

// Para dar início à página, você deve criar algumas tags, conforme o passo a passo indicado a seguir:

// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const title = document.createElement('h1');
title.innerText = 'TrybeTrip - Agência de Viagens';

const body = document.body;
body.appendChild(title);


// Adicione a tag main com a classe main-content como filho da tag body;
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph = document.createElement('p');
paragraph.className = 'description';
paragraph.innerText = 'some text here';
section.appendChild(paragraph)

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const anotherSection = document.createElement('section');
anotherSection.className = 'left-content';
main.appendChild(anotherSection);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const anotherOtherSection = document.createElement('section');
anotherOtherSection.className = 'right-content';
main.appendChild(anotherOtherSection);

// Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200'
anotherSection.appendChild(img)

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const uList = document.createElement('ul');
const numberList = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let index = 0; index < numberList.length; index++) {
    const list = document.createElement('li');
    list.innerText = numberList[index];
    uList.appendChild(list)
}
anotherOtherSection.appendChild(uList);

// Adicione 3 tags h3, todas filhas do main criado no passo 2.
for (let index = 0; index < 3; index++) {
    const h3 = document.createElement('h3');
    main.appendChild(h3);
}

//Bônus

// Adicione a classe title na tag h1 criada;
title.className = 'title'

// Adicione a classe description nas 3 tags h3 criadas;
main.lastChild.className = 'description';
main.lastChild.previousSibling.className = 'description';
main.lastChild.previousSibling.previousSibling.className = 'description';

// Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
main.removeChild(anotherSection);

// Centralize a section criada no passo 6 (aquela que possui a classe right-content).
anotherOtherSection.style.marginRight = 'auto';

// Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
main.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
uList.removeChild(uList.lastChild);
uList.removeChild(uList.lastChild);
console.log(uList.children);