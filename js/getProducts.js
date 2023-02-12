//Ingreso y ejecución de archivo local stock.json
const getProducts = () => {
    fetch('/data/stock.json')
        .then((resp) => resp.json())
        .then(data => {
            pintarProductos(data)
        })
};

getProducts()