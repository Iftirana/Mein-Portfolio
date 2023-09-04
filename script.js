
//-----------onclick funktion für tab menü, zum öffnen und schließen-------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

//for img blur in about section
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

        if (load >99) {
            clearInterval(int)
        }

        loadText.innerText = `${load}%`
        loadText.style.opacity = scale(load, 0, 100, 1, 0)
        bg.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`
    }

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

//for animation of containers from left
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(window.innerHeight / 5 * 4)

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//-----------onclick funktion für side menü, zum öffnen und schließen------
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right ="-200px";
}

//-------------FÜR NACHRICHT FELD-----------

const scriptURL = 'https://script.google.com/macros/s/AKfycbz3BDnTsyQBAWOwgzaqblNEJImPeZOXcf96HlLcwL5iYonV8_GZOhpbLSHTAjMob6voZw/exec'

const form = document.forms['contact-form']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Danke! Ihre Nachricht wurde erfolgreich geschickt."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('error!', error.message))
})