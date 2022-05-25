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
        p.textContent = `La letra ${letra} no es váida.`;
        mensajeErroneo.appendChild(p);
      }
    }
  
    tarjeta1.appendChild(mensajeErroneo);
    if(mensajeErroneo.children.length === 0) {
       return true;
     }
     return false;
  }