const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

let UsuarioHTML = document.getElementById('NombreUsuario')// Aca se carga el texto de arriba segun que categoria visitemos.
    let contenido2 = `
        <p> ${localStorage.getItem('usuario')} </p>
        `
        UsuarioHTML.innerHTML = contenido2

function Mostrarlista() { //Esto lo que hace es escribir en un string vacio lo que se pondra en el div que tenemos en el html
    let cadena = "";
    
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let category = currentCategoriesArray[i];

            if (((minCount == undefined) || (minCount != undefined && parseInt(category.soldCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.soldCount) <= maxCount))){

            cadena += `
            <div class="row">
                <div class="col-3">
                    <img src="${category.image}" alt="${category.description}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${category.name} - USD ${category.cost}</h4>
                        <small class="text-muted">${category.soldCount} vendidos</small>
                    </div>
                    <p class="mb-1">${category.description}</p>
                </div>
            </div>
        `
    }
    document.getElementById('cat-list-container-productos').innerHTML = cadena
    
}}

document.addEventListener('DOMContentLoaded', function(e){ // Se obtiene la informacion que esta en ese link se crea el array currentCategoriesArray y se sobreescribe con el resultado y se efectua la funcion MostrarLista.
    getJSONData("https://japceibal.github.io/emercado-api/cats_products/" + localStorage.getItem('catID') + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data.products
            Mostrarlista(currentCategoriesArray)
        }
    })})
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        Mostrarlista();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;
        console.log(minCount);
        console.log(maxCount);

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        Mostrarlista();
    });

 let ProductosHTML = document.getElementById('contenedor-introduccion')// Aca se carga el texto de arriba segun que categoria visitemos.
    let contenido = `
        <div class="productos">
            <h2>Productos</h2>
            <p>Verás aquí todos los productos de la categoría ${localStorage.getItem('NombreCat')}</p>
        </div>`
    ProductosHTML.innerHTML = contenido


function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    Mostrarlista();
}