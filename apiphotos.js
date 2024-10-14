/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com';
/* OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('appphotos');

fetch(`${API_URL}/photos`)
    .then((response) => response.json())
    .then((photos) => {
        photos.forEach((photo) => {
            const div = document.createElement('div');
            const img = document.createElement('img');

            img.src = photo.url;

            div.appendChild(img);
            HTMLResponse.appendChild(div);
        });
    })
    .catch((error) => {
        console.error('Error en la solicitud', error);
    });