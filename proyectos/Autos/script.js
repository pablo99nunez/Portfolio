const url = new URL(location);
const searchparams = url.searchParams;

const marca=searchparams.get("marcas")
const pago=searchparams.get("pago")
const desc=searchparams.get("desc")



document.body.addEventListener("change",()=>{
    if(document.getElementById("efec").checked){
        document.getElementById("desc").removeAttribute("disabled")
    }else document.getElementById("desc").setAttribute("disabled","true")
})

document.getElementById("desc").addEventListener("click",()=>{
    document.getElementById("descnum").classList.toggle("appear")
})

if(marca!=null){

 
    document.getElementById("marca").innerHTML=marca;
    document.getElementById("pago").innerHTML=pago;

    var precio=0;
    switch (marca) {
        case "Renault":precio=160000;break;
        case "BMW":precio=240000;break;
        case "Chevrolet":precio=140000;break;
        case "Fiat":precio=120000;break;
        case "Volkswagen":precio=196000;break;
        
        default:
            break;
    }
    if(desc=="on"){
        const descuento=searchparams.get("descuento")
        document.getElementById("descuento").innerHTML=descuento+"%"
        document.getElementById("total").innerHTML="$"+(precio*(100-descuento))/100
        document.getElementById("conDescuento").classList.toggle("disable");
    }
    
    document.getElementById("precio").innerHTML="$"+precio;
    document.getElementById("form").classList.toggle("disable");
    document.getElementById("backbutton").classList.toggle("disable");
    document.getElementById("result").classList.toggle("disable");
}