// Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
// Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
// Recupere o subtítulo e altere-o para: Principais informações.
// Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
// Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
// Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.

let title = document.getElementById('page-title').innerText;
title = 'shutter island';
console.log(document.getElementById('page-title').innerText = title);

let paragraph = document.getElementById('first-paragraph').innerText;
paragraph = "Filme sobre um ex soldado de guerra que agora como investigador, vai a uma ilha isolada investigar sobre um paciente em especifico. Excelente plot twist";
console.log(document.getElementById('first-paragraph').innerText = paragraph);

let subtitle = document.getElementById('subtitle').innerText;
subtitle = 'Principais informações';
document.getElementById('subtitle').innerText = subtitle

let elements = document.getElementsByClassName('paragraph-style');
elements[0].style.fontStyle = 'italic'
console.log(elements[1].innerText);
elements[1].innerText = 'Direção: Martin Scorsese \n Roteirista: Dennis Lehane, Laeta Kalogridis  \n Atores: Leonardo DiCaprio, Emily Mortimer, Mark Rufallo  '

let changeColor = document.getElementsByTagName('h2');
for(let i = 0; i<changeColor.length;i++){
    changeColor[i].style.color = 'Blue';
};