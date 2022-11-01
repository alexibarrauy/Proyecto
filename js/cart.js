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

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(CART_INFO_URL + "25801.json")
    .then(respuesta => respuesta.json())
    .then(datos =>{
        let Info = datos.articles[0]
        console.log(Info)
        let InfoCart = "";
        InfoCart += `
        <tr>
            <b>
                <th scope="col"><img src="${Info.image}" class="image"></img></th>
                <th scope="col">${Info.name}</th>
                <th scope="col">${Info.unitCost} ${Info.currency}</th>
                <th scope="col"><input type="number" min="1" id="cantidad" placeholder="1"></th>
                <th scope="col" id="subtotal">${Info.unitCost} ${Info.currency}</th>
            </b>
        </tr>`
        document.getElementById("tabla_cart").innerHTML += InfoCart
        document.getElementById("productCostText").innerHTML = Info.unitCost + " " + Info.currency 
        
        let cantidad = document.getElementById("cantidad")
        let subtotal = document.getElementById("subtotal")

        document.getElementById("cantidad").addEventListener("change", ()=>{
            let preciofinal = "";
            preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)
            
            console.log(preciofinal)
<<<<<<< HEAD
            subtotal.innerHTML = preciofinal + ` ` + Info.currency
=======
            subtotal.innerHTML = preciofinal + ` ` + Info.currency 
>>>>>>> 9c2608e6e3481ef5905ff53cdad28e8f6818ab86
        })
        
         
        


    })
})


// el lado oscuro de la fuerza

// .addEventListener("click", ()=>{
//     let preciofinal = "";
//     preciofinal = `
//     (${cantidad} * ${subtotal})`
//     console.log(preciofinal)
// })


    