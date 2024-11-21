"use strict";
const addBtn = document.querySelector(".add");
const clearBtn = document.querySelector(".clear");
const products = document.querySelector(".products");
let card = document.querySelector(".list");
let selectProducts = [];
let qtd = document.querySelector(".qtd");
let total = 0;
function add() {
    /* name - value - qtd */
    let selectedProduct = products.options[products.selectedIndex].text;
}
function clear() {
}
function push(text, quantity) {
    for (let i = 0; i <= selectProducts.length; i++) {
        selectProducts.push(text, quantity);
        let li = document.createElement("li");
        li.innerHTML = `${text} - ${qtd.value}`;
    }
}
/* clearBtn?.addEventListener('click', (e) => {
    e.preventDefault;
    alert("clicou2");
}) */
addBtn === null || addBtn === void 0 ? void 0 : addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    add();
});
