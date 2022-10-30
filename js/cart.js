
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
        
        let cantidad = document.getElementById("cantidad")
        let subtotal = document.getElementById("subtotal")

        document.getElementById("cantidad").addEventListener("change", ()=>{
            let preciofinal = "";
            preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)
            
            console.log(preciofinal)
            subtotal.innerHTML = preciofinal + ` ` + Info.currency
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


    