function Mostrarlista(lis) {
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

document.addEventListener('DOMContentLoaded', function(e){
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/101.json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data.products
            Mostrarlista(currentCategoriesArray)
        }
    })})