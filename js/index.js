
document.addEventListener('DOMContentLoaded', cargarCarrito());


//boton finalizar compra

const btn99 = document.querySelector('#btn99')

btn99.addEventListener('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Fecicitaciones por su compra!',
        text: 'Gracias. En breve se enviarán los detalles de su compra a su correo electrónico.'
    })
})
