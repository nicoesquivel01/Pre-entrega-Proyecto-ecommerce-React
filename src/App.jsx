import { useState } from 'react'
import './App.css'
import Home from './assets/layout/home'
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Nav from './components/Nav';
import ProductosConteiner from './components/productConteiner';
import Carrito from './components/carrito';
import About from './components/About';
import Contacto from './components/Contacto';
import Header from './components/header';
import ProductoDetalle from './components/ProductoDetalle';
import Admin from '../../e-commerce-2.0/src/components/Admin';
import Login from '../../e-commerce-2.0/src/components/Login';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)
  const [productosCarrito, setProductosCarrito] = useState([])
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)
  
  function funcionCarrito(producto){
    const existe = productosCarrito.find(p => p.id === producto.id);
    
    if (existe) {
        const carritoActualizado = productosCarrito.map((p) => {
            if (p.id === producto.id){
                const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                return productoActualizado
            }else{
                return p
            }
        })
        setProductosCarrito(carritoActualizado)
    }else{
        // Si no existe, lo agregamos con su cantidad
        const nuevoCarrito = [...productosCarrito, producto];
        setProductosCarrito(nuevoCarrito)
    }}

    function borrarProductoCarrito(id){
    console.log(id)
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }
    function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser(){
    setUsuarioLogeado(!usuarioLogeado)
  }


  return (
    <Router>
      
      <div>
        <Header />
        <Nav productosCarrito={productosCarrito} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/>
        <Route path='/productos' element={<ProductosConteiner />}/>
        <Route path='/carrito' element={<Carrito productos={productosCarrito} funcionBorrar={borrarProductoCarrito}/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/productos/:id" element={<ProductoDetalle funcionCarrito={funcionCarrito}/>} />
        <Route path='/admin' element={adminLogeado ? <Admin/> : <Navigate to={"/login"} replace/>} />
        
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
