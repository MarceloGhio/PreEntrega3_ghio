let carrito = []



const productoContenedor = document.getElementById('producto-contenedor')

// Agregar al carrito

productoContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoRepetido(e.target.id)
    }
})

// Producto repetido

const validarProductoRepetido = (productoId) => {
    const productoRepetido = carrito.find(producto => producto.id == productoId)

//Condicional del producto repetido

    if (!productoRepetido) {
        const producto = productos.find(producto => producto.id == productoId)
        carrito.push(producto)
        pintarProductoCarrito(producto)
        actualizarTotalesCarrito(carrito)
    } else {
        productoRepetido.cantidad++
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`)
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotalesCarrito(carrito)
    }

    // return
};

//Pintar carrito y cargando datos de los productos para mostrar en el HTML, con boton de eliminacion de producto

const pintarProductoCarrito = (producto) => {
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
        <p>${producto.nombre}</p>
        <p>Precio: ${producto.precio}</p>
        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">✖</button>
    `
    contenedor.appendChild(div)
};

//actualizacion del carrito antes de mostrar en HTML

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const totalCompra = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)

    pintarTotalesCarrito(totalCantidad, totalCompra)
    guardarCarritoStorage(carrito)
};

const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito')
    const precioTotal = document.getElementById('precioTotal')

    contadorCarrito.innerText = totalCantidad
    precioTotal.innerText = totalCompra
};

//Pintando carrito en Html

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor')

    contenedor.innerHTML = ''

    carrito.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
            
            
        `
        contenedor.appendChild(div)
    });
};

//Eliminar productos del carrito

const eliminarProductosCarrito = (productoId) => {
    const productoIndex = carrito.findIndex(producto => producto.id == productoId)
    carrito.splice(productoIndex, 1)
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
};

//Vaciar carrito con mensajes de sweet alert

const vaciarCarrito = document.querySelector('#vaciarCarrito')

vaciarCarrito.addEventListener('click', () => {
    
        console.log("tu carrito se vacio")
        carrito.length = []
        localStorage.clear('carrito')
        pintarCarrito()
})

const carritoVacio = (carrito.length == [] == true)

if (carritoVacio) {
    vaciarCarrito.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Los productos han sido eliminados con éxito!',
            text: 'El carrito está vacío.'
            })
            pintarCarrito()
        })
} else {
    vaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        icon: 'warning',
        title: 'Sardinilla, su carrito está vacío!',
        text: 'Por favor seleccione figuras de colección para agregar al carrito!'
        })
        pintarCarrito()
})
}
    
//Almacenando datos del cattito

function guardarCarritoStorage(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritoStorage
};

//LLamando al carrito actualizado

const cargarCarrito = () => {
    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage()
        pintarCarrito(carrito)
        actualizarTotalesCarrito(carrito)
    }
};

cargarCarrito()


