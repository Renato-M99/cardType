const addBtn = document.querySelector(".add")!;
const clearBtn = document.querySelector(".clear")!;

const products = document.querySelector(".products") as HTMLSelectElement;

let card = document.querySelector(".list") as HTMLUListElement;
let selectProducts = [];
let qtd = document.querySelector(".qtd") as HTMLInputElement;
let total: number = 0;





function add() {
    /* name - value - qtd */
    let selectedProduct = products.options[products.selectedIndex].text;

    

   

    
    
}

function clear() {

}


function push(text: string, quantity: number){
    for(let i = 0; i <= selectProducts.length; i++){
        selectProducts.push(text, quantity);
        let li = document.createElement("li");

        li.innerHTML = `${text} - ${qtd.value}`;
    }
}


























/* clearBtn?.addEventListener('click', (e) => {
    e.preventDefault;
    alert("clicou2");
}) */


addBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    add();
})