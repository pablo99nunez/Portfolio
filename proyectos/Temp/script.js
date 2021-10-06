let button = document.getElementById("convert");

button.addEventListener('click',Convertir);
document.getElementById("temp").addEventListener('click',()=>{document.getElementById("Arrow").classList.toggle("turn")})

function Update(value){
    let result = document.getElementById("result");
    result.innerHTML = value;
}


function Convertir(){
    
    let type=document.getElementById("temp").value
    let degrees=document.getElementById("degrees").value
    let result
    switch (type) {
        case "C":
            result=parseFloat((degrees *(9/5))+32).toFixed(2) +" °F"
            
            break;
        case "F":
                
                result=parseFloat((degrees-32)*(5/9)).toFixed(2)+" °C"
            break;
        default:
            result=parseFloat(degrees-273.15).toFixed(2)+" °C";
        break;
    }
    Update(result)
}