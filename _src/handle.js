"use strict";
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const products = document.querySelector(".products");
let card = document.querySelector(".list");
let selectProducts = [];
let qtd = document.querySelector(".qtd");
let totalCall = document.querySelector(".total");
let total = 0;
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    add();
});
function add() {
    /* name - value - qtd */
    let selectedProduct = products.options[products.selectedIndex].text;
    let quantity = Number(qtd.value);
    let li = document.createElement("li");
    li.innerHTML = `${selectedProduct} - ${qtd.value}`;
    card.append(li);
    total += Number(products.options[products.selectedIndex].value) * quantity;
    totalCall.innerText = `Total: ${total.toFixed(2)} R$`;
}
function clear() {
}
function push(text, quantity) {
    for (let i = 0; i <= selectProducts.length - 1; i++) {
        selectProducts.push(text, quantity);
    }
}
/* clearBtn?.addEventListener('click', (e) => {
    e.preventDefault;
    alert("clicou2");
}) */
