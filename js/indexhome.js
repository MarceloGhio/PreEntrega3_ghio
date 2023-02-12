const btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', () => {
    Swal.fire({
        icon: 'warning',
        title: 'Bienvenido Sardinilla!',
        text: 'Gracias por elegir el mundo de THE WITCHER 3'
    })
})