const nombre = document.getElementById ("name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");    


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <10){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(username.value.length >8){
        warnings += `La cedula no es valida <br>`
    entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(pass2.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true

       
    }

    if(entrar){
        parrafo.innerHTML = warnings

    }
    else{
       entrar=true
    }
        
   

  
}
)
