import { useState } from "react";
import "../styles/productos.css"
import { dispararSweet } from "../assets/sweerAlert";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Card({producto}) {
// const [cantidad, setCantidad] = useState(1);

    // function agregarAlCarrito() {
    //     if (cantidad < 1) return;
    //     dispararSweet("Producto agregado", "Su producto fue agregado exitosamente", "success" , "cerrar")
    //     funcionCarrito({ ...producto, cantidad }); // Pasamos también la cantidad
    // }

    // function sumarContador() {
    //     setCantidad(cantidad + 1)
    // }

    // function restarContador(){
    //     if (cantidad > 1) {
    //         setCantidad(cantidad - 1)
    //     }
    // }


    return( //Envolver mejor a la card completa para que al dar click en cualquier lado nos redireccione, y agregar estilo coin hover
    <div className="product-card">
        <h1>{producto.name}</h1>
        <p>{producto.description}</p>
        <img src={producto.imagen}/>
        <p>{producto.price} $</p>
            {/* <div>
                <button onClick={restarContador}>-</button>
                <span style={{ margin: "0 10px", color:"black" }}>{cantidad}</span>
                <button onClick={sumarContador}>+</button>
            </div> */}
        <Link to={"/productos/" + producto.id}> <button >Mas informacion</button></Link>
    </div>)
}

export default Card;