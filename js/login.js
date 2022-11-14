let contra = document.getElementById('contra');
let email = document.getElementById('mail');
let usuario = localStorage.getItem('usuario')


document.getElementById("send").addEventListener("click", function(e){
    if ((contra.value.length === 0) || (email.value.length === 0)) {
        e.preventDefault();
        alert('Falta llenar un campo');
    }
    
    else{
        localStorage.setItem("usuario", email.value);
        window.location.href = "index2.html"
    }
}); 
