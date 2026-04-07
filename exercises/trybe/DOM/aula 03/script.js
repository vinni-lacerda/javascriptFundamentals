// Acesse o elemento where-are-you.
const whereAreYou = document.getElementById('where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = whereAreYou.parentNode;
parent.style.backgroundColor = 'yellow';

// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
const childOfChild = whereAreYou.firstElementChild;
childOfChild.innerText = 'texto adicionado aqui';

// Acesse o first-child a partir de parent.
const firstChild = parent.firstElementChild;

// Acesse o first-child a partir de where-are-you.
const firstChildFromWhere = whereAreYou.previousElementSibling;

// Acesse o texto Attention! a partir de where-are-you.
const attentionText = whereAreYou.parentNode.innerText;

// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;

// Acesse o third-child a partir de parent.
const thirdChildFromParent = parent.lastElementChild.previousElementSibling;

console.log(thirdChildFromParent);