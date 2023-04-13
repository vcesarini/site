const fakeStore = document.querySelector('#store')
//    const producto = fetch('https://fakestoreapi.com/products?limit=4')
const producto = fetch('../json/productos.json')

producto.then(res => res.json())
        .then(data => {
        for (const elemento of data) {
            const nuevoDiv = document.createElement('div');
            nuevoDiv.classList.add('card');
            nuevoDiv.innerHTML = `
                <img src="${elemento.img}" class="card-img-top" alt="${elemento.title}">
                <div class="card-body">
                    <h5 class="card-title">${elemento.titulo}</h5>
                    <p>${elemento.categoria}</p>
                    <p class="card-text">${elemento.descripcion}</p>
                    <p>Precio: $${elemento.precio}</p>
                    <a href="#" class="btn btn-primary text-uppercase">${elemento.boton}</a>
                </div>
            `;
            fakeStore.appendChild(nuevoDiv)
        }
});

document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')
const modal = new bootstrap.Modal('#modal',{})

async function traerProductos(){
const url = 'http://fakestoreapi.com/products'

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
const {id, title, price, category, description, image } = prod;
contenedor.innerHTML += `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src="${image}">
<div class="card-body">
<h5 class="card-title">${title}</h5>
<p>${description}</p>
<p>${price}</p>
<button onclick=verProducto(${id}) class="btn btn-primary">VER</button>
</div>
</div>
`;
});
}