export  const agregarProducto = async (producto) => {
    return(
        new Promise(async(res, rej) =>{
              try {
      const respuesta = await fetch('https://681bcb236ae7c794cf6fd004.mockapi.io/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

if (!respuesta.ok) {
        throw new Error('Error al agregar el producto.');
      }
const data = await respuesta.json();
      console.log('Producto agregado:', data);
      res(data)
      //alert('Producto agregado correctamente');
    } catch (error) {
      console.error(error.message);

      //alert('Hubo un problema al agregar el producto.');
      rej("Hubo un problema al agregar el producto.")
    }
        })
    )
  
  };