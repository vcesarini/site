document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')

async function traerProductos(){
const url = '../json/productos.json'

try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        pintarProductos(respuesta)
    } catch (error) {
        console.log(error)
    }
}

function pintarProductos(productos){
    productos.forEach((prod) => {
    const {sku, title, price, category, description, image, gramos, cc, button } = prod;
    contenedor.innerHTML += `
        <div class="card">
        <h6>${sku}</h6>
        <img class="img-producto" src="${image}">
        <div class="card-body">
            <h5 class="card-title">${title}${cc}${gramos}</h5>
            <h6>${category}</h6>
            <p class="control-texto">${description}</p>
            <p>Precio: $${price}</p>
            <button class="btn btn-primary">${button}</button>
        </div>
        </div>
        `;
    });
}