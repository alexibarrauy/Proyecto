const Url = 'https://japceibal.github.io/emercado-api/products/50922.json'

fetch(Url)
.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos)
})