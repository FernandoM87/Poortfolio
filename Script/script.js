window.addEventListener("scroll", function (){
    var header = document.querySelector("nav");
    header.classList.toggle("down", window.scrollY>0);
}) 