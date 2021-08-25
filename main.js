const eButtonToolbar = document.querySelector("header .toolbar .button-toolbar");
const eLineButtonToolbar = document.querySelectorAll("header .toolbar .button-toolbar div")
const eToolbar = document.querySelector("header .toolbar ul");

function main(){
    eButtonToolbar.addEventListener('click', function(){
        eToolbar.classList.toggle("active");
        eLineButtonToolbar[0].classList.toggle("active");
        eLineButtonToolbar[1].classList.toggle("active");
        eLineButtonToolbar[2].classList.toggle("active");
    })
}

main();