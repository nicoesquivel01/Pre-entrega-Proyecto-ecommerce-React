import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase.js';
import { dispararSweet } from '../assets/sweerAlert.js';

function Login2() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };
  
  function registrarUsuario(e){
    e.preventDefault();
    crearUsuario(usuario, password)
    .then((usuario) => {
        login(usuario)
        dispararSweet("Logeo exitoso", "", "success", "Confirmar")
      }).catch((error) => {
        if(error.code == "auth/invalid-credential"){
          dispararSweet("Credenciales incorrectas", "", "error", "Cerrar")
        }
        //alert("Error")
      })
  }


  const handleSubmit2 = (e) => {
    logOut()
  }


    function iniciarSesionEmailPass (e) {
      e.preventDefault();
    loginEmailPass(usuario, password).then((usuario) => {
        login(usuario)
        dispararSweet("Logeo exitoso", "", "success", "Confirmar")
      }).catch((error) => {
        if(error.code == "auth/invalid-credential"){
          dispararSweet("Credenciales incorrectas", "", "error", "Cerrar")
        }
        //alert("Error")
      })
    }

    function handleShow (e) {
      e.preventDefault();
      setShow(!show)
    }


  if(user){
    return(
        <form onSubmit={handleSubmit2}>
    <button type="submit">Cerrar sesión</button>
    </form>)
  }
  if(!user && show){
    return(
      <div>
      <form onSubmit={iniciarSesionEmailPass}>
      <h2 style={{color: "black"}} >Iniciar Email y pw</h2>
      <div>
        <label style={{color: "black"}} >Email:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label style={{color: "black"}}>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <button onClick={handleShow}>Registrate</button>
    </div>

    )
  }if(!user && !show){
    return(
      <div>
      <form onSubmit={registrarUsuario}>
      <h2 style={{color: "black"}} >Registrarse</h2>
      <div>
        <label style={{color: "black"}}>Mail:</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label style={{color: "black"}}>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
    <button onClick={handleShow}>Iniciar Sesion</button>

    </div>

    )
  }
  // return (
  //   <div>
  //   <form onSubmit={handleSubmit}>
  //     <h2>Iniciar sesión</h2>
  //     <div>
  //       <label>Usuario:</label>
  //       <input
  //         type="text"
  //         value={usuario}
  //         onChange={(e) => setUsuario(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label>Contraseña:</label>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </div>
  //     <button type="submit">Iniciar sesión</button>
  //   </form>
   
    
  //   </div>
  // );
}
export default Login2;