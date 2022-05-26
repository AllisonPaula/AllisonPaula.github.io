function validarMensaje() {
    // Borrar errores previos
    let erroresPrevios  = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios){
      tarjeta1.removeChild(err);
    }
  
    var mensaje = inputMensaje.value;
    let letrasValidas ="abcdefghijklmnñopqrstuvwxyz ";
    let mensajeErroneo = document.createDocumentFragment();
    for (let letra of mensaje){
      if(!letrasValidas.includes(letra)) {
        let p = document.createElement("p");
        p.setAttribute("class","error");
        p.textContent = `La letra ${letra} no es válida.`;
        mensajeErroneo.appendChild(p);
      }
      
    }

    if(!validarMensaje.length == 0){
      return true;
    }
  
    tarjeta1.appendChild(mensajeErroneo);
    if(mensajeErroneo.children.length === 0) {
       return true;
     }
     return false;
  }