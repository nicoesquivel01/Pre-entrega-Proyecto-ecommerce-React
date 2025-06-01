import CarritoCard from "./CarritoCard"
import "../styles/carrito.css"



    function Carrito({productos, funcionBorrar}) {
        const total = productos.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    )
        
    
    function funcionDisparadora(id){
        funcionBorrar(id)
    }
        
return(
    <div className="carritoContainer">
        {productos.length > 0 ? productos.map((producto) => (
            <CarritoCard producto={producto}
            funcionDisparadora={funcionDisparadora}/>
        ))
    : <p style={{color:"black"}}>Carrito vacio</p>}
    {total > 0 ? <span style={{color:"black"}}>Total: {total.toFixed(2)}$ </span> : <></> }
    </div>
    )}


export default Carrito;