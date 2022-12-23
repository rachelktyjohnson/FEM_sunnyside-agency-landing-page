const open_menu = document.querySelector("#open-menu");
const nav = document.querySelector("nav");

if (window.innerWidth < 600){
    nav.style.display = "none";
}
open_menu.addEventListener('click', ()=>{
    if (nav.style.display === "none"){
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
})