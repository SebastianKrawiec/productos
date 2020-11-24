/* En esta ejercitación te pediremos que desarrolles una pequeña aplicación modularizada que,
dado un archivo .json de productos (lo encontrarán abajo, en los comentarios), al ejecutarla por línea de comandos pueda recibir las
siguientes instrucciones:
- listar todos los productos
- agregar un nuevo producto
- filtrar los productos según su precio(ej.: Todos los productos que tengan un precio entre 20 y 100)
- modificar el precio de un producto específico
+Extras+
- eliminar un producto
- buscar un producto */

let fs = require("fs");
let archivo = "./productos.json"; 
let json = fs.readFileSync(archivo, "utf-8")
let productos = JSON.parse(json);

module.exports = {
    leerJSON: function(){
        return productos;
    },

    escribirJSON: function(nombreProducto, precio){
        let listaDeProductos = this.leerJSON();
        let lastId = 1;
        
        listaDeProductos.map(producto => {
            if(lastId > producto.id){
                lastId = producto.id;
            }
        });

        let Producto = function(id,name,price){
            this.id = id,
            this.name = name,
            this.price = price
        };

        let nuevoProducto = new Producto(lastId+=1 ,nombreProducto,precio);

        listaDeProductos.push(nuevoProducto);

        this.guardarJSON(listaDeProductos);
    },

    guardarJSON: function(info){
        let produViejos = JSON.stringify(info);
        fs.writeFileSync(archivo, produViejos, "utf-8");
    },
}