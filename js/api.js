document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')

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
<h1>${title}</h1>
<img src="${image}" class="card-img-top" alt="${title}">
`;
});
}