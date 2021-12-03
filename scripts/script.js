// JavaScript Document
menu = document.querySelector("nav:nth-of-type(1) li:nth-of-type(2)");

menu.addEventListener("click", openMenu);

function openMenu() {
    menu.classList.add("anders");
}