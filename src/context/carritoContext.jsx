import { createContext, useState } from 'react';
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider ({ children }) {
    const [productos, setProductos] = useState([]);

    const agregarAlCarrito = (producto) => {
        const existe = productos.find((p) => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productos.map((p) => {
                if (p.id === producto.id){
                    const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                    return productoActualizado
                }else{
                    return p
                }
            })
            setProductos(carritoActualizado)
        }else{
            // Si no existe, lo agregamos con su cantidad
            const nuevoCarrito = [...productos, producto];
            setProductos(nuevoCarrito)
        }
    };

    const vaciarCarrito = () => {
        setProductos([]);
    };

    function borrarProductoCarrito(id){
        console.log(id)
        const nuevoCarrito = productos.filter((p) => p.id !== id);
        setProductos(nuevoCarrito);
    }

    return (
        <CarritoContext.Provider value={{ productos, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}