import CarritoCard from "./CarritoCard"
import "../styles/carrito.css"
import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";



    function Carrito({}) {
        const{user} = useAuthContext();
        const {productos, vaciarCarrito, borrarProductoCarrito} = useContext(CarritoContext);
        const total = productos.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    )
        
    
    function funcionDisparadora(id){
        borrarProductoCarrito(id)
    }
    function funcionDisparadora2(){
        vaciarCarrito()
    }

    if(!user){
        return(
            <Navigate to="/login" replace/>
        )
    } 
        
return(
    <div className="carritoContainer">
        <button onClick={funcionDisparadora2}>Vaciar carrito</button>
        {productos.length > 0 ? productos.map((producto) => (
            <CarritoCard producto={producto}
            funcionDisparadora={funcionDisparadora}/>
        ))
    : <p style={{color:"black"}}>Carrito vacio</p>}
    {total > 0 ? <span style={{color:"black"}}>Total: {total.toFixed(2)}$ </span> : <></> }
    </div>
    )}


export default Carrito;