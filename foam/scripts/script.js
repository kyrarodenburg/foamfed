// JavaScript Document
// hamburger menu 
var hamMenu = document.querySelector("nav:nth-of-type(1) ul:nth-of-type(2)");

var hamButton = document.querySelector("nav:nth-of-type(1) ul:nth-of-type(1) li:nth-of-type(1)");

var imgButton = document.querySelector("nav:nth-of-type(1) ul:nth-of-type(1) li:nth-of-type(1) img")

var value = 0;

var navMenu = document.querySelector("nav:nth-of-type(2)")

// de tekst in de homepagina dat veranderd

var veranderTekst = document.querySelector("section:nth-of-type(4) p:nth-of-type(1)")



// Click on menu Button

hamButton.addEventListener("click", toggleHamburgerMenu);



function toggleHamburgerMenu() {

    hamMenu.classList.toggle("visible");
    imgButton.src = "images/close.png"

    if (value == 0) {
        ++value
        imgButton.src = "images/close.png"

    } else {
        value == 1
            --value
        imgButton.src = "images/hamburger.png"

    }
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