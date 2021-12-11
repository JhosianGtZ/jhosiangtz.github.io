

let button = document.getElementById("icon");
let header_links = document.getElementById("nav-links");
let menu = document.getElementById("menu");
let counter = 0;

let cerrado = 0;

button.addEventListener("click", function () {
    if (counter == 0) {
        menu.classList.remove('bx-menu-alt-right');
        menu.classList.toggle('bx-x');
        header_links.className = ('nav-links btn-2');
        counter = 1;
    } else {
        menu.className = ('bx bx-menu-alt-right');
        header_links.classList.remove('btn-2');

        header_links.className = ('nav-links btn-1');
        counter = 0;
    }
})

window.addEventListener('resize', function () {
    if (screen.width > 750) {
        counter = 0;
        header_links.classList.remove('btn-2');
        header_links.className = ('nav-links btn-1');

    }
})

window.addEventListener('click', function (e) {

    if (cerrado == false) {
        let span = document.querySelector('header-header');
        if (e.target == span) {
            counter = 0;
        }
    }
});