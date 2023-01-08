var numeroCelular=document.getElementById("nCelular");
var errorCelular=document.getElementById("errorCelular");

numeroCelular.addEventListener("keyup",regexCelular);
//numeroCelular.style.backgroundColor="white";
function regexCelular()
{
    var valorCajaCelular=numeroCelular.value;
    //console.log(valorCajaCelular);
    var regexP=/^(\+57)?[\s\-]?(3\d{2})[\s\-]?(\d{3})[\s\-]?\d{2}[\s\-]?\d{2}$/;
    var resultadoPhone=regexP.test(valorCajaCelular);
    if (resultadoPhone==true)
    {
        
        numeroCelular.style.backgroundColor="#3eae";
        errorCelular.innerHTML="Número de celular correcto";
        errorCelular.style.color="green";
    }
    else{
        if(valorCajaCelular=="")
        {
        numeroCelular.style.backgroundColor="white";
        errorCelular.innerHTML="Digite su número de celular";
        errorCelular.style.color="black";
        }
        else{
        //numeroCelular.style.color="red";
        numeroCelular.style.backgroundColor="#e71837";
        errorCelular.innerHTML="Digite bien el número de celular" ;
        errorCelular.style.color="#e71837"; 
        }    
    }
}
