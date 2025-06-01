import ProductosConteiner from "./productConteiner";
import ProductosDestacados from "./productosDestacados";


function Main() {  
    return (  
        <main style={{ backgroundColor:"#eeeeee" , padding: "20px" , marginTop:"20px", color:"#242424", textAlign:"center"}}>  
            <h2>Conoce nuestros productos destacados</h2>  
            
            <ProductosDestacados/>  
        </main>  
    );  
}  
export default Main; 