function Mostrarlista(lis) { //Esto lo que hace es escribir en un string vacio lo que se pondra en el div que tenemos en el html
    let cadena = "";
        for (let categorias of lis){
        cadena += `
            <div class="row">
                <div class="col-3">
                    <img src="${categorias.image}" alt="${categorias.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${categorias.name} - USD ${categorias.cost}</h4>
                        <small class="text-muted">${categorias.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${categorias.description}</p>
                </div>
            </div>
        `
    }
    document.getElementById('cat-list-container-productos').innerHTML = cadena
    
}  

document.addEventListener('DOMContentLoaded', function(e){ // Se obtiene la informacion que esta en ese link se crea el array currentCategoriesArray y se sobreescribe con el resultado y se efectua la funcion MostrarLista.
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem('catID') + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data.products
            Mostrarlista(currentCategoriesArray)
        }
    })})

 let ProductosHTML = document.getElementById('contenedor-introduccion')// Aca se carga el texto de arriba segun que categoria visitemos.
    let contenido = `
        <div class="productos">
            <h2>Productos</h2>
            <p>Verás aquí todos los productos de la categoría ${localStorage.getItem('NombreCat')}</p>
        </div>`
    ProductosHTML.innerHTML = contenido
