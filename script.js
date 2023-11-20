'use strict'
// burger bar

let navigationElement = document.getElementById ("navBar");
let burgerElement = document.getElementById ("burgerBar");

burgerElement.addEventListener('click', function() {
    // navigationElement.classList.add('navActive');-damateba
    navigationElement.classList.toggle('navActive');
    
})