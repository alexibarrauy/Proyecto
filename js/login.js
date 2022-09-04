let contra = document.getElementById('contra');
let email = document.getElementById('mail');


document.getElementById("send").addEventListener("click", function(e){
    if ((contra.value.length === 0) || (email.value.length === 0)) {
        e.preventDefault();
        alert('Falta llenar un campo');
    }
    else{  window.location.href = "index2.html"}
}); 

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("send").addEventListener("click", function() {
        localStorage.setItem("usuario", email.value);

    })
    
})
