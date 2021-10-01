const meLlamo = document.getElementById("t1");
const about=document.getElementById("about");
const linkCont=document.querySelectorAll(".link-container")
const track=document.getElementById("track")
const titulos = document.querySelectorAll(".large")
const info=document.querySelector("#info")
const cantIco=track.children.length;
var pos=0
track.style.position

$(".Arrowdown, .link").on("click",function(e){
	e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(href).offset().top},1000)
    
})
$( document ).on( "mousemove", function( event ) {
   
    pos=(event.pageX-window.innerWidth/2)/(window.innerWidth/2)
    
    track.style.transform="translateX("+(pos*(cantIco*10))+"rem)" 
});

$(document).on("scroll", function (e) {
    titulos.forEach((e) => {
        if (e.getBoundingClientRect().y >0 && e.getBoundingClientRect().y <    window.innerHeight *0.75) {
            e.children[0].classList.remove("disable")
            info.classList.remove("invisible")
            info.classList.add("appear")
            
        }
    })
    
    
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
