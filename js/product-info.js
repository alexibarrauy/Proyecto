let UsuarioHTML = document.getElementById('NombreUsuario')// Aca se carga el texto de arriba segun que categoria visitemos.
    let contenido2 = `
        <p> ${localStorage.getItem('usuario')} </p>
        `
    UsuarioHTML.innerHTML = contenido2

const Url = 'https://japceibal.github.io/emercado-api/products/' //products info
const UrlComent = 'https://japceibal.github.io/emercado-api/products_comments/' // comentarios

document.addEventListener('DOMContentLoaded', ()=>{//carga lo referente al producto en el primer div
    fetch(Url + localStorage.getItem('ItemId') + ".json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos)
        let ContenidoMostrar = ""

        ContenidoMostrar +=`
        <h1>${datos.name}</h1>
        <hr>
        <h4><b>Precio</b></h4>
        <p>${datos.currency} ${datos.cost} </p>
        <h4><b>Descripción</b></h4>
        <p>${datos.description}</p>
        <h4><b>Categoría</b></h4>
        <p>${datos.category}</p>
        <h4><b>Cantidad de vendidos</b></h4>
        <p>${datos.soldCount}</p>
        <h4><b>Imagenes ilustrativas</b></h4>
        <div class="columna-info-produ">
            <img src="${datos.images[0]}" class="imagen-produ">
            <img src="${datos.images[1]}" class="imagen-produ">
            <img src="${datos.images[2]}" class="imagen-produ">
            <img src="${datos.images[3]}" class="imagen-produ">
        </div>
        `       
        console.log(ContenidoMostrar)

        document.getElementById("Descripcion_producto").innerHTML = ContenidoMostrar;
})

})

document.addEventListener('DOMContentLoaded', ()=>{//carga los comentarios en otro div
    fetch(UrlComent + localStorage.getItem('ItemId') + ".json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let contenidoamostrar = ""
        console.log(datos)
        contenidoamostrar +=`
        <h2>Comentarios</h2>
        <div class="comentarios-borde">
            <p><b>${datos[0].user}</b> - ${datos[0].dateTime} - ${datos[0].score} estrellas</p> 
            <p>${datos[0].description}</p>

        </div>
        <div class="comentarios-borde">
            <p><b>${datos[1].user}</b> - ${datos[1].dateTime} - ${datos[1].score} estrellas</p> 
            <p>${datos[1].description}</p>
        </div>
        <div class="comentarios-borde">
            <p><b>${datos[2].user}</b> - ${datos[2].dateTime} - ${datos[2].score} estrellas</p> 
            <p>${datos[2].description}</p>
        </div>
            `
        document.getElementById("Comentarios_producto").innerHTML = contenidoamostrar;
        
    })
})