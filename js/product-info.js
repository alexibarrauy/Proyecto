let UsuarioHTML = document.getElementById('NombreUsuario')// Aca se carga el texto de arriba segun que categoria visitemos.
    let contenido2 = `
        <p> ${localStorage.getItem('usuario')} </p>
        `
    UsuarioHTML.innerHTML = contenido2

const Url = 'https://japceibal.github.io/emercado-api/products/' //products info
const UrlComent = 'https://japceibal.github.io/emercado-api/products_comments/' // comentarios

document.addEventListener('DOMContentLoaded', ()=>{//Carga Info producto e imagenes.
    
    fetch(Url + localStorage.getItem('ItemId') + ".json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos)
        let DescripcionProdu = ""

        DescripcionProdu +=`
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
        `       
        console.log(DescripcionProdu)

        document.getElementById("Descripcion_producto").innerHTML = DescripcionProdu;
        let ImagenesProdu = "";
        console.log(datos.images.length)
        for (let i=0; i < datos.images.length; i++){
            ImagenesProdu +=`
            <img src="${datos.images[i]}" class="imagen-produ">`
        }

        document.getElementById("Imagenes_producto").innerHTML = ImagenesProdu;
})

})

document.addEventListener('DOMContentLoaded', ()=>{//carga los comentarios en otro div
    fetch(UrlComent + localStorage.getItem('ItemId') + ".json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let contenidoamostrar = ""
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