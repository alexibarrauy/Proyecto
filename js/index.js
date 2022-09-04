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
        <p> ${localStorage.getItem('usuario')} </p>
        `
    UsuarioHTML.innerHTML = contenido2
