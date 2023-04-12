    
    /* FAKE STORE */

    const fakeStore = document.querySelector('#store')
    const producto = fetch('../json/fake.json')

    producto.then(res => res.json())
            .then(data => {
                for (const elemento of data) {
                    const nuevoDiv = document.createElement('div');
                    nuevoDiv.classList.add('card');
                    nuevoDiv.innerHTML = `
                        <img src="${elemento.image}" class="card-img-top" alt="${elemento.title}">
                        ${id}
                        <div class="card-body">
                          <h5 class="card-title">${elemento.title}</h5>
                          <p>${elemento.category}</p>
                          <p class="card-text">${elemento.description}</p>
                          <p>Precio: $${elemento.price}</p>
                            <a href="#" class="btn btn-primary">COMPRAR</a>
                        </div>
                    `;
                    fakeStore.appendChild(nuevoDiv)
                }
            });