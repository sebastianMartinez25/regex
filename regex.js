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

//VARIABLES MONEDA---------------------------------------
var moneda=document.getElementById("moneda");
var errorMoneda=document.getElementById("errorMoneda");
//-------------------------------------------------------

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
//KEYPRESS VALIDAR QUE SEA UN NÚMERO LA MONEDA------
//moneda.addEventListener("keypress",digitV);
//--------------------------------------------------
//KEYUP CONVERTIR NÚMERO A MONEDA-------------------
moneda.addEventListener("keyup",convertMoneda);
//--------------------------------------------------

function regexCelular()
{
    var valorCajaCelular=numeroCelular.value;
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

/*function digitV(numero)
{
    var regexDigit=/^[\d]+$/;
    var caracter=numero.key;
        if (regexDigit.test(caracter))
        {
        }
        else
        {
            numero.preventDefault();   
        }
}*/
function convertMoneda(numero)
{
    /*var numeroFormateado=parseFloat(moneda.value).toFixed(2);
    numeroFormateado=numeroFormateado.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') // separar miles con puntos
    .replace('.', ',');
    moneda.value=numeroFormateado;
    /*var numeroFormateado=moneda.value.replace(/[^\d]/g,'');
    console.log(numeroFormateado);*/
    //var numeroFormateado=moneda.value;
    /*numeroFormateado=parseFloat(moneda.value).toFixed(2);
    console.log(numeroFormateado);*/
    /*numeroFormateado=numeroFormateado.replace((/\B(?=(\.\d{1,2})?(?!\d))/g, ','))
   console.log(numeroFormateado);*/
/*numeroFormateado=numeroFormateado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    moneda.value=numeroFormateado;*/
    var regexMoney=/^-?(?:\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?)$/
    var resultadoMoney=regexMoney.test(moneda.value);
    if (resultadoMoney==true)
    {   
        moneda.style.backgroundColor="#3eae";
        errorMoneda.innerHTML="valor correcto $";
        errorMoneda.style.color="green";
    }
    else{
        if(moneda.value=="")
        {
        moneda.style.backgroundColor="white";
        errorMoneda.innerHTML="Digite un valor $";
        errorMoneda.style.color="black";
        }
        else{
        moneda.style.backgroundColor="#e71837";
        errorMoneda.innerHTML="Digite bien el valor $" ;
        errorMoneda.style.color="#e71837"; 
        }    
    }   
}
/*function convertirMoneda(input)
{
    // Eliminar cualquier carácter que no sea un número
  input.value = input.value.replace(/[^0-9]/g, '');

  // Verificar si el valor es numérico antes de formatearlo
  if (!isNaN(input.value)) {
    // Formatear el número en formato de moneda
    let value = parseFloat(input.value.replace(',', '.')).toFixed(2);
    input.value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ',00';
  }
}*/