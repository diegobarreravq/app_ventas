import { RiDeleteBinLine } from "react-icons/ri";

export default function Venta({ id, texto, cantidad, eliminarVenta }) {
  return (
    <>
      <div className="contenedor-agregados">
        <p className="agregados-texto">{texto}</p>
        <p className="agregados-cantidad">{cantidad}</p>
        <button
          onClick={() => eliminarVenta(id)} className="contenedor-iconos">
          <RiDeleteBinLine className="agregados-eliminar" />
        </button>
      </div>
    </>
  )
}