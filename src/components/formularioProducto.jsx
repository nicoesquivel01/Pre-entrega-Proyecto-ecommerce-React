import { useState } from "react";
import { agregarProducto } from "../assets/requests";
import { data, Navigate } from "react-router-dom";
import { dispararSweet } from "../assets/sweerAlert";
import { useAuthContext } from "../context/AuthContext";

function FormularioProducto({}) {
  const { admin} = useAuthContext();
        const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
});
const [errores, setErrores] = useState({});
const validarFormulario = () => {
  
  const nuevosErrores = {};
  if (!producto.name.trim()) {
    nuevosErrores.name = 'El nombre es obligatorio.';
  }
  if (!producto.price || producto.precio <= 0) {
    nuevosErrores.price = 'El precio debe ser mayor a 0.';
  }
  if (!producto.description.trim() || producto.description.length < 10) {
    nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.';
  }
  console.log(producto.description.length)
  setErrores(nuevosErrores);
  console.log(nuevosErrores)
  return Object.keys(nuevosErrores).length === 0;};


const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
};0 
const handleSubmit2 =  (e) => {
    e.preventDefault();
    const validarForm =  validarFormulario()
        if (validarForm == true) {
          agregarProducto(producto).then((data) => {
            setProducto({ name: '', price: '', description: '', imagen: ""});
          }).catch((error) => {
            dispararSweet("Hubo un problema al agregar el producto", error, "error", "Cerrar")
          })
        } else{
          dispararSweet("Error en la carga de producto", validarForm, "error", "Cerrar")
        }
      }  ;

      // if(!admin){
      //   return(
      //       <Navigate to="/login" replace/>
      //   )
      // }
const handleSubmit = (e) => {
    
    e.preventDefault();
    onAgregar(producto); // Llamada a la función para agregar el producto
    setProducto({ name: '', price: '', description: '' }); // Limpiar el formulario
};

    return ( 
    <form onSubmit={handleSubmit2}>
        <h2 style={{color: "black"}}>Agregar Producto</h2>
        <div>
        <label style={{color: "black"}}>Nombre:</label>
        <input 
        type="text" name="name" value={producto.name} onChange={handleChange} required/>
    </div>
    <div>
        <label style={{color: "black"}}>Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required
        min="0"/>
    </div>

    <div>
        <label style={{color: "black"}}>Descripción:</label>
        <textarea
        name="description"
        value={producto.description}
        onChange={handleChange}
        required
        />
    </div>
    <button type="submit">Agregar Producto</button>
    </form>
);
}

export default FormularioProducto;


