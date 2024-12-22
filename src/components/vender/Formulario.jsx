import { useContext, useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Contexto } from "../context/ProviderContex";

export default function Formulario() {
  const { productos, venta, setVenta } = useContext(Contexto);

  /* referencia al contenedor de sugerencias */
  const cntentSugerencias = useRef(null);

  /* estado para los estilos dinamicos de la lista de productos desplegables */
  const [mostrarSuge, setMostrarSug] = useState(false);

  /* almacena los productos que coincidieron con el texto introducido en el input */
  const [sugerencias, setSugerencias] = useState([]);

  /* estado para almacenar producto y cantidad introducidos en el formulario */
  const [newProducto, setNewProducto] = useState({
    texto: "",
    cant: "",
  });

  /* logica para filtrar productos en funcion del texto introducido en el input */
  useEffect(() => {
    if (newProducto.texto) {
      const coincidencias = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(newProducto.texto.toLowerCase())
      );
      setSugerencias(coincidencias);
      setMostrarSug(true);
    } else {
      setMostrarSug(false);
    }
  }, [newProducto, productos]);

  /* logica hacer click fuera del contetnedor para desaparecer listado de coincidencias */
  useEffect(() => {
    const manejarClickFuera = (e) => {
      if (
        cntentSugerencias.current &&
        !cntentSugerencias.current.contains(e.target)
      ) {
        setMostrarSug(false);
      }
    };
    document.addEventListener("click", manejarClickFuera);
    return () => {
      document.removeEventListener("click", manejarClickFuera);
    };
  }, []);

  /*  /* funcion actualiza campo input con la seleccion de una de las sugerencias */
  const manejarSeleccionSugerida = (productoSugerido) => {
    setNewProducto((preData) => ({
      ...preData,
      texto: productoSugerido,
    }));
  };

  /* funcion encargada de manejar los cambios en el input y actualizar el estado donde se almacena el objeto que contiene nombre del producto y cantidad */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProducto((prevData) => ({
      id: uuidv4(),
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProducto.texto.trim()) {
      newProducto.texto = newProducto.texto.trim();
      const actualizarVenta = [...venta, newProducto];
      setVenta(actualizarVenta);
    }
    setNewProducto({
      texto: "",
      cant: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="formulario-vender">
        <input
          className="formulario-input"
          placeholder="Producto"
          type="text"
          name="texto"
          value={newProducto.texto}
          onChange={handleChange}
        />

        <input
          className="formulario-cantidad"
          placeholder="Cantidad"
          type="number"
          name="cant"
          value={newProducto.cant}
          onChange={handleChange}
        />

        <button type="submit" className="formulario-boton">
          Agregar
        </button>

        {/* segmento de codigo utilizado para renderizar los productos que fueron filtrados por las coinsidencias del texto 
        introducido en el input */}
        {/* INICIO */}
        {sugerencias.length > 0 && mostrarSuge && (
          <div className="listaProductos" ref={cntentSugerencias}>
            {sugerencias.map((sugerencia, index) => (
              <div
                className="listaProductos_item"
                key={index}
                onClick={() => manejarSeleccionSugerida(sugerencia.nombre)}
              >
                {`${sugerencia.nombre} $${sugerencia.precio}`}
              </div>
            ))}
          </div>
        )}
        {/* FIN */}
      </form>
    </>
  );
}
