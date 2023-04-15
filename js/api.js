// const fakeStore = document.querySelector('#store')
// //    const producto = fetch('https://fakestoreapi.com/products?limit=4')
// const producto = fetch('../json/productos.json')

// producto.then(res => res.json())
//         .then(data => {
//         for (const elemento of data) {
//             const nuevoDiv = document.createElement('div');
//             nuevoDiv.classList.add('card');
//             nuevoDiv.innerHTML = `
//                 <img src="${elemento.img}" class="card-img-top" alt="${elemento.title}">
//                 <div class="card-body">
//                     <h5 class="card-title">${elemento.titulo}</h5>
//                     <p>${elemento.categoria}</p>
//                     <p class="card-text">${elemento.descripcion}</p>
//                     <p>Precio: $${elemento.precio}</p>
//                     <a href="#" class="btn btn-primary text-uppercase">${elemento.boton}</a>
//                 </div>
//             `;
//             fakeStore.appendChild(nuevoDiv)
//         }
// });

document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')
// const modal = new bootstrap.Modal('#modal',{})

async function traerProductos(){
const url = '../json/productos.json'
//const url = 'https://fakestoreapi.com/products?limit=4'
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
const {id, title, price, category, description, image, button } = prod;
contenedor.innerHTML += `
<div class="card">
<img class="img-producto" src="${image}">
<div class="card-body">
<h5 class="card-title">${title}</h5>
<h6>${category}</h6>
<p class="control-texto">${description}</p>
<p>Precio: $${price}</p>
<button class="btn btn-primary">${button}</button>
</div>
</div>
`;
});
}