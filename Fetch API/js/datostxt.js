// creacion de constantes ( selectores)
const cargartxtBtn = document.querySelector('#cargarTxt');
cargartxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    // lo primero que se necesita sabes que quiero consultar
    //en este casa cual es la url
    const url = 'data/datos.txt'; 
    fetch(url) .then(respuesta =>{
        //console.log(respuesta);

        return respuesta.text();
    })
      .then(datos=>{
        console.log(datos);
      })  
      .catch((error)=>{
        console.log(error);
      });
}

