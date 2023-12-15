const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.pageYoffset >60){
        nav.classList.add("scrolled");

    }else{
        nav.classList.remove("scrolled");
    }
});