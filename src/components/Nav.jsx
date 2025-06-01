import "../styles/nav.css"
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


function Nav({productosCarrito}) {  
    return (  
        <nav style={{ backgroundColor: "#eeeeee", color:"black", padding: "5px", height:"19px"}}>  
            <ul style={{ color:"black",listStyle: "none", display: "flex", justifyContent: "space-between",alignItems:"center", margin: 0 , fontSize:"15px"}}>  
                <li ><Link to="/" className="nav-link" >Inicio</Link></li>  
                <li><Link to="/productos" className="nav-link">Productos</Link></li>  
                <li><Link to="/contacto" className="nav-link">Contacto</Link></li>  
                <li><Link to="/about" className="nav-link">Nosotros</Link></li>   
                <li><Link to="/carrito" className="nav-link">Carrito <FiShoppingCart /> <span/>{productosCarrito.length > 0 ? productosCarrito.length : ""}<span/> </Link></li>
                <li><Link to="/admin" className="nav-link">Admin</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
            </ul>  
        </nav>  
    );  
}  


export default Nav; 