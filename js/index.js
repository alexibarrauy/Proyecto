document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        localStorage.setItem("NombreCat", "autos")
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        localStorage.setItem("NombreCat", "juguetes")
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        localStorage.setItem("NombreCat", "muebles")
        window.location = "products.html"
    });
});
console.log(localStorage.getItem('usuario'))

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