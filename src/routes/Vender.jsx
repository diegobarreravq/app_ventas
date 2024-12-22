import { useContext } from "react";
import { Contexto } from "../components/context/ProviderContex.jsx";
import Formulario from "../components/vender/Formulario.jsx";
import Venta from "../components/vender/Venta.jsx";
import NavBar from "../components/NavBar.jsx";
import "../estilos/vender.css";

export default function Vender() {
  const { venta, setVenta, ventas, setVentas } = useContext(Contexto);

  const eliminarVenta = (id) => {
    const ventaActualizada = venta.filter((venta) => venta.id !== id);
    setVenta(ventaActualizada);
  };

  const generarVenta = () => {
    if (venta.length > 0) {
      setVentas([venta, ...ventas]);
    }
    setVenta([]);
  };

  return (
    <div className="principal-cnt-vender">
      <NavBar />
      <div className="vender-formulario">
        <Formulario />
        <button className="generar-vnt" onClick={generarVenta}>
          Generar venta
        </button>
      </div>

      <hr />
      <h1 className={venta.length !== 0 ? "agregados" : "noAgregados"}>
        Productos agregados
      </h1>
      <div className={venta.length !== 0 ? "infoTabla" : "noInfoTabla"}>
        <p className="infoTabla-detalle">Detalle</p>
        <p className="infoTabla-cantidad">Cantidad</p>
      </div>
      <div className="contenedor-venta">
        {venta.map((venta) => (
          <>
            <Venta
              key={venta.id}
              id={venta.id}
              texto={venta.texto}
              cantidad={venta.cant}
              eliminarVenta={eliminarVenta}
            />
            <hr className="divicion-venta" />
          </>
        ))}
      </div>
    </div>
  );
}
