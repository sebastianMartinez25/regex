var numeroCelular=document.getElementById("nCelular");

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

    }
    else{
        //numeroCelular.style.color="red";
        numeroCelular.style.backgroundColor="#e71837";
        
    }
}
