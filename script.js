const meLlamo = document.getElementById("t1");
const about=document.getElementById("about");
const linkCont=document.querySelectorAll(".link-container")




linkCont.forEach((linkC) => {
    
    linkC.addEventListener("mouseenter",()=>{
        linkC.children[1].style.display="block";
    })
    linkC.addEventListener("mouseleave",()=>{
        linkC.children[1].style.display="none";
    })
})
