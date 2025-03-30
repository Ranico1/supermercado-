// Producto, Descuento

class Producto {

    #precioBase

    constructor(nombre, precioBase, cantidad) {
        this.nombre = nombre
        this.#precioBase = precioBase
        this.cantidad = cantidad
        this.descuentos = []
    }

    agregarDescuento(nuevoDescuento) {
        this.descuentos.push(nuevoDescuento)
    }

    precioFinal() {
        const precioBaseTotal = this.#precioBase * this.cantidad
        const precioFinal = this.descuentos.reduce(
            (precioAnterior, descuento) => 
                precioAnterior - descuento.valorDescontado(this.#precioBase, this.cantidad)
            , precioBaseTotal
        )
        return Math.max(0, precioFinal)
    }

    get precioBase() {
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) {
        this.#precioBase = nuevoPrecio
    }
}

class DescuentoFijo {

    constructor(valor) {
        this.valor = valor
    }

    valorDescontado(precioBase, cantidad) {
        return this.valor
    }

}

class DescuentoPorcentual {
    constructor(porcentaje) {
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        return cantidad * precioBase * this.porcentaje / 100
    }
}

class DescuentoPorCantidad {
    // "Tanto descuento en la N unidad"
    constructor(cantidadMinima, porcentaje) {
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }

    valorDescontado(precioBase, cantidad) {
        const vecesRepetido = Math.floor(cantidad / this.cantidadMinima)
        let valorDescontado = 0
        if (vecesRepetido >= 1) {
            valorDescontado = precioBase * (this.porcentaje / 100) * vecesRepetido
        }
        return valorDescontado
    }
}

    class Carro {
        constructor(){
            this.itemsCarrito = []
        }
    
    agregarItemAcarro(unItem){
        this.itemsCarrito.push(unItem)
    }

    precioTotalCarro(){
        this.itemsCarrito.reduce((acumulador,x) => acumulador.precioFinal() + x.precioFinal(), 0)
    }
}

    class ItemCarro {

        constructor(producto,cantidad){
            this.producto = producto
            this.cantidad = cantidad
        }

        cantidadProductos(){
            this.cantidad
        }

        precioFinal(){
            this.producto.precioCondescuentosegun
        }
    }

module.exports = { Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual, Carro, ItemCarro }