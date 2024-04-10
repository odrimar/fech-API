const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url ='data/empleado.json';

    fetch(url).then(respuesta =>{
        //console.log(respuesta);
        return respuesta.json();
    }).then(resultado=>{
       // console.log(resultado);

       mostrarHTML(resultado);
    })
}

function mostrarHTML({empresa,id,nombre,trabajo}){
console.log('mostrar');
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
    <p> Empleado: ${nombre}<p>
    <p> Id:${id}</p> 
    <p> Empresa:${empresa}</p>
    <p> Trabajo:${trabajo}</p>
    `
}