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
    
    let name1 = document.getElementById('Nombre1')
    let name2 = document.getElementById('Nombre2')
    let apellido1 = document.getElementById('Apellido1')
    let apellido2 = document.getElementById('Apellido2')
    let numcontacto = document.getElementById('Tel')
    let correo = document.getElementById('Mailuser')

    let usuario = localStorage.getItem('usuario')
    let name1int = localStorage.getItem('name1int')
    let name2int = localStorage.getItem('name2int')
    let apellido1int = localStorage.getItem('apellido1int')
    let apellido2int = localStorage.getItem('apellido2int') 
    let numcontactoint= localStorage.getItem('numcontactoint')

document.addEventListener('DOMContentLoaded', ()=>{
    
    if (usuario != null){
        correo.value = usuario
        console.log(usuario)
    }
    else {
        window.location.href = "index.html"
    }

    name1.value = name1int
    name2.value = name2int
    apellido1.value = apellido1int
    apellido2.value = apellido2int
    numcontacto.value = numcontactoint

})

let formulariodatos = document.getElementById('Guardarcambios')

formulariodatos.addEventListener('click', event => {
    if (!formulariodatos.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
      alert("Falta algún dato, intente de nuevo")
    } else {
        localStorage.setItem("name1int", name1.value);
        localStorage.setItem("name2int", name2.value);
        localStorage.setItem("apellido1int", apellido1.value);
        localStorage.setItem("apellido2int", apellido2.value);
        localStorage.setItem("numcontactoint", numcontacto.value);
        localStorage.setItem("usuario", correo.value);
        setTimeout(() => {
        ;
          }, "100")
    }})