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
import ProductosDestacados from './components/productosDestacados';
import Login2 from './components/login2';
import FormularioProducto from './components/formularioProducto';

function App() {
  



  return (
    <Router>
      
      <div>
        <Header />
        <Nav productosCarrito={ProductoDetalle} />
        

      <Routes basename="/Pre-entrega-Proyecto-ecommerce-React">
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser}/>}/> */}
        <Route path='/login' element={<Login2/>}/>
        <Route path='/productos' element={<ProductosConteiner />}/>
        <Route path='/carrito' element={<Carrito />}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path='/admin' element={ <Admin/> } />
        <Route path='/admin/agregarProductos' element={ <FormularioProducto /> } />
        
      </Routes>
      <Footer/>
      </div>
    </Router>
  )
}

export default App
