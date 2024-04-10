const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())// convertir la respuesta a formato JSON
        .then(resultado =>mostrarHTML(resultado))// pasamos los datos al metodo mostrar HTML
}

function mostrarHTML(datos){
    const contenido = document.querySelector(`.contenido`);
    let  html = ''; // variable donde vamos a guardar el codigo HTML que vamos generando

    datos.forEach(perfil => {
        const{author, post_url} = perfil;
        html += `
        <p>Autor: ${author}</p>
        <a href = "${post_url}" target="_blank">Ver imagen</a>
        `
    });

    contenido.innerHTML = html;
}