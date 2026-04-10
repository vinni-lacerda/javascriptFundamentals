const produtos = [
  { nome: 'Notebook', preco: 3000 },
  { nome: 'Mouse', preco: 100 },
  { nome: 'Teclado', preco: 200 },
  { nome: 'Monitor', preco: 1200 }
];
const discountedProducts = produtos.map((produto) => {
    return {
    nome: produto.nome,
    precoComDesconto: Number(produto.preco - (produto.preco * 0.1)).toFixed(2)
}});
console.log(discountedProducts);

const emails = [
  'user@email.com',
  'admin@email.com',
  'user@email.com',
  'contato@email.com',
  'admin@email.com'
];

const set = new Set(emails);

// for (let index = 0; index < emails.length; index++) {
//     const element = emails[index];
//     set.add(element);
// }
const setArr = Array.from(set);
console.log(setArr.sort());

