import Card from "./card";
import "../styles/productos.css"
import Carrito from "./carrito";
import { useEffect, useState } from 'react';
import CarritoCard from "./CarritoCard";



function ProductosDestacados() {

    const [productos, setProductos] = useState ([])
    // const [productosCarrito, setProductosCarrito] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);



{useEffect(() => {
    console.log("se ejecuta useEffect")
        fetch('https://681bcb236ae7c794cf6fd004.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                console.log(datos)
                setProductos(datos)
                setCargando(false);
                
            })
            .catch((error) => {
                console.log(error)
                setError("hubo un error al cargar los productos");
                setCargando(false);
            });
    }, []);}



    if (cargando) {
        return <p>cargando productos...</p>
        
    } else if (error ){
        return <p>{error}</p>
    } else {
    return(
        <><div>
            <div className="product-conteiner">
                {productos.slice(0, 5).map((producto) => (
                    <Card
                        producto={producto} />

                ))}
            </div>
        </div>
        </>
        

    )
}}



//import Card from "./card";





export default ProductosDestacados;