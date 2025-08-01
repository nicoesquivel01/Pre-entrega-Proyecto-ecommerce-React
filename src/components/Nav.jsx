import "../styles/nav.css"
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useAuthContext } from "../context/AuthContext";


function Nav({}) {  
    const {productos} = useContext(CarritoContext)
    const { admin, user} = useAuthContext();
    return (  
        <nav style={{ backgroundColor: "#eeeeee", color:"black", padding: "5px", height:"19px"}}>  
            <ul style={{ color:"black",listStyle: "none", display: "flex", justifyContent: "space-between",alignItems:"center", margin: 0 , fontSize:"15px"}}>  
                <li ><Link to="/" className="nav-link" >Inicio</Link></li>  
                <li><Link to="/productos" className="nav-link">Productos</Link></li>  
                <li><Link to="/contacto" className="nav-link">Contacto</Link></li>  
                <li><Link to="/about" className="nav-link">Nosotros</Link></li>   
                <li><Link to="/carrito" className="nav-link">Carrito <FiShoppingCart /> <span/>{productos.length > 0 ? productos.length : ""}<span/> </Link></li>
            {user ? <li><Link to="/admin" className="nav-link">Admin</Link></li>  : <></>}
                <li><Link to="/login" className="nav-link">Login</Link></li>
            {user ? <li><Link to="/admin/agregarProductos" className="nav-link">AgregarProductos</Link></li> : <></>} 
            </ul>  
        </nav>  
    );  
}  


export default Nav; 