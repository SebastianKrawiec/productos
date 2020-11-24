let moduloProductos = require("./app");
let process = require("process");
let comando = process.argv[2];

switch(comando){
    case "listar":
        let productos = moduloProductos.leerJSON();
        if(productos.length === 0){
            console.log("la lista se encuentra vacía");
        } else {
            console.log("---------------------------------------");
            console.log("---  Esta es su lista de productos  ---");
            console.log("---------------------------------------");
            productos.forEach(element => {
                console.log(`ID: ${element.id} || Nombre: ${element.name} -- Price: ${element.price}`)
            });
        }
    break;

    case "agregar":
        let nombre = process.argv[3];
        let precio = process.argv[4];
        moduloProductos.escribirJSON(nombre, precio);
    break;
}
