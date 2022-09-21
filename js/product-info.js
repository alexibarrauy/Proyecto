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
        let ContenidoComent = "";
        for (i=0; i < datos.length; i++){
        let Estrellas = "";
        for (j=0; j < 5; j++){
            if (j < datos[i].score){
                Estrellas += `<span class="fa fa-star checked"></span>`
            } else {
                Estrellas += `<span class="fa fa-star "></span>`
            }
        }
        ContenidoComent +=`
        <div class="comentarios-borde">
            <p><b>${datos[i].user}</b> - ${datos[i].dateTime} - ${Estrellas} </p> 
            <p>${datos[i].description}</p>

        </div>
        `
        
        
        }
        document.getElementById("Comentarios_producto").innerHTML += ContenidoComent;
    })
  
})