import { useState, createContext } from "react";
import productos from "../../productos.js";

export const Contexto = createContext();

function ProviderContex({ children }) {
  const [slideNV, setSlideNV] = useState();
  const [venta, setVenta] = useState([]);
  const [ventas, setVentas] = useState([]);

  return (
    <Contexto.Provider
      value={{
        productos,
        slideNV,
        setSlideNV,
        venta,
        setVenta,
        ventas,
        setVentas,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default ProviderContex;
