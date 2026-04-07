// Remova a tag h2, filha do elemento where-are-you.
const parent = document.getElementById('where-are-you').parentNode;
const children = parent.children

for (let index = 0; index < children.length; index++) {
    const element = children[index];
    // console.log(element.innerText);
    if(element.innerText.includes('Elemento que você deve remover')){
        parent.removeChild(element)
    }
    
}
console.log(children);