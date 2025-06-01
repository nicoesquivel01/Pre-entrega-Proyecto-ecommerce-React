import Imagen from "../assets/varelatech.jpeg"
import Carrito from "./carrito";

function Header() {  
    
    return ( 
        <header style={{ backgroundColor: "#242424", padding: "10px", textAlign: "center", color: "white" , marginTop:"0px" , height:"80px", marginBottom:"10px", display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>  
        
        <img  style={{ height:"70px"}}src= {Imagen} /> 
            <h1 style={{fontSize:"40px",fontWeight:"700"}}>Varela Tech</h1> 
            
            
        </header>  
    );  
}  

export default Header;