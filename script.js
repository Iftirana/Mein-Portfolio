
//-----------onclick funktion für tab menü, zum öffnen und schließen-------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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