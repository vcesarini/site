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

async function traerProductos(){
const url = 'http://fakestoreapi.com/products'
}