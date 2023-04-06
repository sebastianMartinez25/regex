//VARIABLES CELULAR
var numeroCelular=document.getElementById("nCelular");
var errorCelular=document.getElementById("errorCelular");
//------------------------------------------------------

//VARIABLES EMAIL
var email=document.getElementById("email");
var errorEmail=document.getElementById("errorEmail");
//-----------------------------------------------------

//KEYUP EN EL INPUT BOX DEL CELULAR----------------------
numeroCelular.addEventListener("keyup",regexCelular);
//numeroCelular.style.backgroundColor="white";


//KEYUP EN EL INPUT BOX DEL EMAIL--------------------------
email.addEventListener("keyup",regexEmail);
//-----------------------------------------------------------
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
function regexEmail()
{
    var regexE=/^(?=.{3,64}@.{2,255}$)(?=.{3,64}@.{2,255}\..{2,6}$)([a-zA-Z0-9]+((\.|\-|\_|__)?[a-zA-Z0-9]+)*)+@([a-zA-Z0-9]{2,}((\.|\-)?[a-zA-Z0-9]+)*)+\.([a-zA-Z0-9]{2,}((\.)?[a-zA-Z0-9]{2,})*)+$/
    //^(?=.{3,64}@.{2,255}$)(?=.{3,64}@.{2,255}\..{2,6}$)([a-zA-Z0-9]+(\.|\-|\_|__)?[a-zA-Z0-9]+)*@([a-zA-Z0-9]+(\.|\-)?[a-zA-Z0-9]+)*\.[a-zA-Z0-9]+$/

    //^(?=.{3,64}$)([a-zA-Z0-9]+((\.|\-|_|__)?[a-zA-Z0-9]+)*)@[a-zA-Z0-9]$/;
    //^([a-zA-Z\d]+([\.]?[a-zA-Z\d]+)*([\-]?[a-zA-Z0-9]+)*([\_]{0,2}[a-zA-Z0-9]+)*){3,8}$/;
    
    var resultadoEmail=regexE.test(email.value);
    if (resultadoEmail==true)
    {   
        email.style.backgroundColor="#3eae";
        errorEmail.innerHTML="Email correcto";
        errorEmail.style.color="green";
    }
    else{
        if(email.value=="")
        {
        email.style.backgroundColor="white";
        errorEmail.innerHTML="Digite su email";
        errorEmail.style.color="black";
        }
        else{
        email.style.backgroundColor="#e71837";
        errorEmail.innerHTML="Digite bien el email" ;
        errorEmail.style.color="#e71837"; 
        }    
    }

}
