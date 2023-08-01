function validar(){
    
     var nombres = document.getElementsByName("nombres").value;
   var  apellidos = document.getElementsByName("apellidos").value;

    if(nombres === ""){
        alert("no nombre");
    }
}