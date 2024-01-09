const navMenu =document.getElementById("nav-menu");
const navClose =document.getElementById("nav-close");
const menuBar =document.getElementById("menu-bar");
 
if(menuBar){
    menuBar.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
    });
} 
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    });
} 