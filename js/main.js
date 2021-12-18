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



// Text animation 


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer.", "Web Designer.", "Software Engineer.",
  "Web Developer.", "Web Designer.", "Software Engineer.",
  "Web Developer.", "Web Designer.", "Software Engineer."
];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
//  Delay time in milliseconds

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArrayIndex.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});