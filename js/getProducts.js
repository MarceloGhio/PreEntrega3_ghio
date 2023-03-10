// Traer datos de JSON  

const getProducts = () => {
    fetch('/data/stock.json')
        .then((resp) => resp.json())
        .then(data => {
            pintarProductos(data)
        })
};

getProducts()