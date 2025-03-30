const { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual, Carro, ItemCarro } = require('./domain.js')
const {aumentarPrecioBaseForEach, aumentarPrecioBaseMap, precioMasAlto, productosMasBaratosQue, obtenerPrecioTotal, ordenarLista} = require('./funciones.js')

const p1 = new Producto("Cocacola", 10, 1)
const descuentoFijo = new DescuentoFijo(5)
p1.agregarDescuento(descuentoFijo)

//console.log(p1)
//console.log("El precio final del producto es: " + p1.precioFinal())

const galletitas = new Producto("Galletitas", 20, 2)

const fideos = new Producto("Fideos", 100, 2)
fideos.agregarDescuento(new DescuentoPorcentual(10))

const carrito = [p1]
carrito.push(galletitas)
carrito.push(fideos)

const listaPrecios = aumentarPrecioBaseMap(carrito, 10)
console.log(listaPrecios)



console.log(carrito.map(productos => productos.precioBase))
console.log("El precio maximo es: " + precioMasAlto(carrito))



console.log(productosMasBaratosQue(carrito, 15))


console.log("El precio total del carrito es: " + obtenerPrecioTotal(carrito))

// Parte agregada para mostrar items del carro 
const carro = new Carro() 
const itemCarro1 = new ItemCarro(galletitas,5)
const itemCarro2 = new ItemCarro(fideos,4)


carro.agregarItemAcarro(itemCarro1)
carro.agregarItemAcarro(itemCarro2)

console.log(carro)

// -----------------------------------------


// const productos = [coca 10, fideos 200, galletitas 50]
// ordenamos lista...
// console.log(productos) : [coca 10, galletitas 50, fideos 200]

ordenarLista(carrito)
console.log("La lista ordenada de productos es: ", carrito)

const objetoLiteral = {
    nombre: "Coca",
    precioBase: 10,
    precioFinal: function() {
        return precioBase + 10
    }
}

// function unaFuncion() {
//     {
//         let variableDentroDeBloque = "Hola Mundo"
//     }
//     console.log(variableDentroDeBloque) // Esto da error
// }

// unaFuncion()