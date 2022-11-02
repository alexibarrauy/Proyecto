document.addEventListener("DOMContentLoaded", function(){
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
                    <th scope="col"><input class="col-md-5" type="number" min="1" id="cantidad" value="1"></th>
                    <th scope="col" id="subtotal">${Info.unitCost} ${Info.currency}</th>
                </b>
            </tr>
            `
        document.getElementById("tabla_cart").innerHTML += InfoCart // primera tabla
        
        let subtotal = document.getElementById("subtotal")
        let subtotal2 = document.getElementById("costoUnitario")
        let total = document.getElementById("costoTotal")
        let cantidad = document.getElementById("cantidad")
        let comision = 0.05
        let Pcomision = document.getElementById("segunEnvio")    
        let preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)

        function CambiarPrecios(){ //function para hallar precios
            preciofinal = parseInt(cantidad.value)*parseInt(Info.unitCost)
            subtotal.innerHTML = preciofinal + " " + Info.currency
            subtotal2.innerHTML = preciofinal + " " + Info.currency
            Pcomision.innerHTML = Math.round(preciofinal * comision) + " " + Info.currency    
            total.innerHTML = preciofinal + (Info.unitCost * comision) + " " + (Info.currency)
        }

        CambiarPrecios()
        
       
        document.getElementById("cantidad").addEventListener("change", ()=>{
            console.log(preciofinal)
            if (cantidad.value <= 1){
                cantidad.value = 1
            }
            CambiarPrecios()
            

        })

        

        document.getElementById("premium").addEventListener("change", function(){
            comision = 0.15;
            CambiarPrecios()
        });
        
        document.getElementById("express").addEventListener("change", function(){
            comision = 0.07;
            CambiarPrecios()
        });
        
        document.getElementById("standard").addEventListener("change", function(){
            comision = 0.05;
            CambiarPrecios()
        });
                
    })
});

(() => { // validacion
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


// el lado oscuro de la fuerza

// .addEventListener("click", ()=>{
//     let preciofinal = "";
//     preciofinal = `
//     (${cantidad} * ${subtotal})`
//     console.log(preciofinal)
// })

