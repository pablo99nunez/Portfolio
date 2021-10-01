const meLlamo = document.getElementById("t1");
const about=document.getElementById("about");
const linkCont=document.querySelectorAll(".link-container")



$(".Arrowdown, .link").on("click",function(e){
	e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top},800)
})


function menu(x) {

    if(!x.matches){

        linkCont.forEach((linkC) => {
            
            linkC.addEventListener("mouseenter", () => {
                linkC.children[1].classList.remove("disable");
            })
            linkC.addEventListener("mouseleave", () => {
                linkC.children[1].classList.add("disable");
            })
        })
    }else{
        const tap  =document.querySelector(".tap");
        tap.classList.toggle("disable")
        document.querySelectorAll(".Arrowdown").forEach((e)=>{
            e.style.animation="jump 1s ease-in-out infinite";
        })
        document.addEventListener("click",()=>{
            tap.classList.add("disable");
            linkCont.forEach((linkC) => {
                
                linkC.children[1].classList.toggle("disable");
                linkC.children[0].classList.toggle("invisible")
            })
                
        })
    }
}
var x=window.matchMedia("(max-width:500px)")
menu(x);
