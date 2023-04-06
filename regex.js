//VARIABLES CELULAR
var numeroCelular=document.getElementById("nCelular");
var errorCelular=document.getElementById("errorCelular");
//------------------------------------------------------

//VARIABLES EMAIL
var email=document.getElementById("email");
var errorEmail=document.getElementById("errorEmail");
//-----------------------------------------------------

//VARIABLES PASSWORD
var password=document.getElementById("password");
var errorPassword=document.getElementById("errorPassword");
var ojito=document.getElementById("ojito");
//-----------------------------------------------------

//KEYUP EN EL INPUT BOX DEL CELULAR----------------------
numeroCelular.addEventListener("keyup",regexCelular);
//numeroCelular.style.backgroundColor="white";

//KEYUP EN EL INPUT BOX DEL EMAIL--------------------------
email.addEventListener("keyup",regexEmail);
//-----------------------------------------------------------
//KEYUP EN EL INPUT BOX DEL PASSWORD--------------------------
password.addEventListener("keyup",regexPassword);
//-----------------------------------------------------------

//CLICK EN EL INPUT BOX OJITO DEL PASSWORD----------
ojito.addEventListener("click",ojitoAD);
//---------------------------------------------------
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

function regexPassword()
{
    var regexPas=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\.)[\S]{8,20}$/
    //^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\.).{8,20}$/
    var resultadoPassword=regexPas.test(password.value);
    if (resultadoPassword==true)
    {   
        password.style.backgroundColor="#3eae";
        errorPassword.innerHTML="Password correcto";
        errorPassword.style.color="green";
    }
    else{
        if(password.value=="")
        {
        password.style.backgroundColor="white";
        errorPassword.innerHTML="Digite su password";
        errorPassword.style.color="black";
        }
        else{
        password.style.backgroundColor="#e71837";
        errorPassword.innerHTML="Digite bien el password, recuerde que debe tener entre 8 a 20 caracteres, al menos: 1 letra Mayúscula, 1 letra Minúscula, 1 Número y 1 Punto y sin Espacios" ;
        errorPassword.style.color="#e71837"; 
        }    
    }

}

function ojitoAD()
{
    if (ojito.checked===true)
    {
        password.type= "password";
    }
    else
    {
        password.type= "text";
    }
}