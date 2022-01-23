// JavaScript Document
// hamburger menu 
var hamMenu = document.querySelector("nav:nth-of-type(1) ul:nth-of-type(2)");

var hamButton = document.querySelector("button");

var deButton = document.querySelector("button");


// de tekst in de homepagina dat veranderd

var veranderTekst = document.querySelector("section:nth-of-type(4) p:nth-of-type(1)")


// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);

deButton.addEventListener("click", toggleMenu);


function toggleHamburgerMenu() {

    hamMenu.classList.toggle("visible");


}

function toggleMenu() {
    document.body.classList.toggle("menuOpen");
}

setTimeout(function() {
    veranderTekst.innerHTML = "video's"
}, 3000)
setTimeout(function() {
    veranderTekst.innerHTML = "interviews"
}, 6000)
setTimeout(function() {
    veranderTekst.innerHTML = "collectie"
}, 9000)
setTimeout(function() {
    veranderTekst.innerHTML = "kunstenaars"
}, 12000)
setTimeout(function() {
    veranderTekst.innerHTML = "currator tours"
}, 12000)