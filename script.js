const meLlamo = document.getElementById("t1");
const about=document.getElementById("about");
const linkCont=document.querySelectorAll(".link-container")



$(".Arrowdown, .link").on("click",function(e){
	e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top},800)
})



linkCont.forEach((linkC) => {
    
    linkC.addEventListener("mouseenter",()=>{
        linkC.children[1].style.display="block";
    })
    linkC.addEventListener("mouseleave",()=>{
        linkC.children[1].style.display="none";
    })
})
