import { useContext } from "react";
import NavBar from "../components/NavBar.jsx";
import { Contexto } from "../components/context/ProviderContex.jsx";

import "../estilos/registro.css";

export default function Registro() {
  const { ventas } = useContext(Contexto);
  return (
    <div className="cnt_registro">
      <NavBar />
      <div className="cnt_registro-ventas">
        {ventas.map((venta, index) => (
          <div className="conjunto-ventas" key={index}>
            <h3 className="fecha-hora">fecha-hora</h3>
            {venta.map((vu) => (
              <div className="venta-unitaria" key={vu.id}>
                <p className="venta-unitaria-cant">{vu.cant}</p>
                <p className="venta-unitaria-texto">{vu.texto}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
