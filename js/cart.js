let UsuarioHTML = document.getElementById('NombreUsuario')// Aca se carga el texto de arriba segun que categoria visitemos.
let contenido2 = `
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    ${localStorage.getItem('usuario')}
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
    <li id="cerrar_sesion"><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
</ul>
</div>
    `
UsuarioHTML.innerHTML = contenido2

document.getElementById('cerrar_sesion').addEventListener('click', function(){
localStorage.removeItem('usuario')
}) 



document.addEventListener("DOMContentLoaded", function(){
    fetch(CART_INFO_URL + "25801.json")
    .then(respuesta => respuesta.json())
    .then(datos =>{
        let Info = datos.articles[0]
        console.log(Info)
        let InfoCart = "";
        InfoCart += `
            <tr>
                <b>
                    <th scope="col"><img src="${Info.image}" class="image"></img></th>
                    <th scope="col">${Info.name}</th>
                    <th scope="col">${Info.unitCost} ${Info.currency}</th>
                    <th scope="col"><input class="col-md-5" type="number" min="1" id="cantidad" value="1"></th>
                    <th scope="col" id="subtotal">${Info.unitCost} ${Info.currency}</th>
                </b>
            </tr>
            `
        document.getElementById("tabla_cart").innerHTML += InfoCart // primera tabla
        
        let subtotal = document.getElementById("subtotal")
        let subtotal2 = document.getElementById("costoUnitario")
        let total = document.getElementById("costoTotal")
        let cantidad = document.getElementById("cantidad")
        let comision = 0.0
        let Pcomision = document.getElementById("segunEnvio")    
        let preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)

        function CambiarPrecios(){ //function para hallar precios
            preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)
            subtotal.innerHTML = preciofinal + " " + Info.currency
            subtotal2.innerHTML = preciofinal + " " + Info.currency
            Pcomision.innerHTML = Math.round(preciofinal * comision) + " " + Info.currency    
            total.innerHTML = preciofinal + (Info.unitCost * comision) + " " + (Info.currency)
        }

        CambiarPrecios()
        
       
        document.getElementById("cantidad").addEventListener("change", ()=>{
            console.log(preciofinal)
            if (cantidad.value <= 1){
                cantidad.value = 1
            }
            CambiarPrecios()
            

        })

        

        document.getElementById("premium").addEventListener("change", function(){
            comision = 0.15;
            CambiarPrecios()
        });
        
        document.getElementById("express").addEventListener("change", function(){
            comision = 0.07;
            CambiarPrecios()
        });
        
        document.getElementById("standard").addEventListener("change", function(){
            comision = 0.05;
            CambiarPrecios()
        });

         
                
    })
});

function Mostrarcompra(){

}

(() => { // validacion
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          alert("Falta algún dato, intente de nuevo")
        } else {
            event.preventDefault()
            alert("¡Has comprado con éxito!")
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


// el lado oscuro de la fuerza

// .addEventListener("click", ()=>{
//     let preciofinal = "";
//     preciofinal = `
//     (${cantidad} * ${subtotal})`
//     console.log(preciofinal)
// })

let credito = document.getElementById("Credito")
let numTarjeta = document.getElementById("TarjetNum")
let codSeguridad = document.getElementById("CodSeguridad")
let vencimiento = document.getElementById("Vencimiento")
let cuentaNum = document.getElementById("Trans")
let transfer = document.getElementById("Transfer")

credito.addEventListener("click", ()=>{ // Lo que pasa al cliquear Tarjeta de credito
    cuentaNum.setAttribute("disabled", "")
    cuentaNum.value = ""
    cuentaNum.classList.remove("is-valid")
    cuentaNum.classList.remove("is-invalid")

    numTarjeta.removeAttribute("disabled", "")
    
    codSeguridad.removeAttribute("disabled", "")

    vencimiento.removeAttribute("disabled", "")

} )

transfer.addEventListener("click", ()=>{ //Lo que pasa al clickear Tranferencia
    numTarjeta.setAttribute("disabled", "")
    numTarjeta.value = ""
    numTarjeta.classList.remove("is-valid")
    numTarjeta.classList.remove("is-invalid")

    codSeguridad.setAttribute("disabled", "")
    codSeguridad.value = ""
    codSeguridad.classList.remove("is-valid")
    codSeguridad.classList.remove("is-invalid")

    vencimiento.setAttribute("disabled", "")
    vencimiento.value = ""
    vencimiento.classList.remove("is-valid")
    vencimiento.classList.remove("is-invalid")

    cuentaNum.removeAttribute("disabled", "")
} )

let Enviar = document.getElementById("enviar")
let codigoerror = document.getElementById("terms-feedback-invalid")

Enviar.addEventListener("click", ()=>{
    if (credito.checked == true){
        codigoerror.innerHTML = "Tarjeta de credito"
    } else if (transfer.checked == true){
        codigoerror.innerHTML = "Transferencia"                    
    } else {
        codigoerror.innerHTML = "No ha seleccionado"
    }
    
})

numTarjeta.addEventListener("keyup", ()=>{ //cada vez que escribo algo en el Numero de tarjeta verifica si esta vacio o no
    if (credito.checked == true && numTarjeta.value == "") {
        numTarjeta.classList.add("is-invalid")
        numTarjeta.classList.remove("is-valid")
    } else {
        numTarjeta.classList.add("is-valid")
        numTarjeta.classList.remove("is-invalid")
    }
})

codSeguridad.addEventListener("keyup", ()=>{//cada vez que escribo algo en el Codigo de seguridad verifica si esta vacio o no
    if (credito.checked == true && codSeguridad.value == "") {
        codSeguridad.classList.add("is-invalid")
        codSeguridad.classList.remove("is-valid")
    } else {
        codSeguridad.classList.add("is-valid")
        codSeguridad.classList.remove("is-invalid")
    }
})

vencimiento.addEventListener("keyup", ()=>{//cada vez que escribo algo en el vencimiento verifica si esta vacio o no
    if (credito.checked == true && vencimiento.value == "") {
        vencimiento.classList.add("is-invalid")
        vencimiento.classList.remove("is-valid")
    } else {
        vencimiento.classList.add("is-valid")
        vencimiento.classList.remove("is-invalid")
    }
})

cuentaNum.addEventListener("keyup", ()=>{//cada vez que escribo algo el numero de cuenta verifica si esta vacio o no
    if (transfer.checked == true && cuentaNum.value == "") {
        cuentaNum.classList.add("is-invalid")
        cuentaNum.classList.remove("is-valid")
    } else {
        cuentaNum.classList.add("is-valid")
        cuentaNum.classList.remove("is-invalid")
    }
})