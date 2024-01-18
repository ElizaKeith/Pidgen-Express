function submitRequest(){ 
    
    const standardElement=document.getElementById("standard");
    if (standardElement.value=== "standard") {
alert ("Thank you for your buisness. Your letter will be delivered within 3-5 days!");
}else{
    alert("Thank you for your buisness. Your letter will be delivered within 1-2 days!");
    }
}

let button=document.querySelector ("#btn");
button.addEventListener("click",submitRequest);