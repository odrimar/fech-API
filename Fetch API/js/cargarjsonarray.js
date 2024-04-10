 const cargarJSONArrayBtn = document.querySelector( '#cargarJSONArray')
 cargarJSONArrayBtn.addEventListener('click',obtenerDatos);
 
function obtenerDatos(){
    const url = 'data/empleados.json'; // direccion del archivo json
    fetch(url)
        .then(respuesta => respuesta.json())// convertir la respuesta a formato JSON
        .then(resultado =>mostrarHTML(resultado))// pasamos los datos al metodo mostrar HTML
}

function mostrarHTML(empleados){
   // console.log(empleado);
const contenido = document.querySelector('.contenido');
let html='';
    empleados.forEach(empleado => {
        const{id,nombre,empresa,trabajo} = empleado;
    html +=`
        <p> Empleado: ${nombre}<p>
        <p> Id:${id}</p> 
        <p> Empresa:${empresa}</p>
        <p> Trabajo:${trabajo}</p>
        `;

    });
        
        contenido.innerHTML =html;
       
    }