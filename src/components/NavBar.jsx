import { NavLink } from "react-router-dom";
import "../estilos/navBar.css";
import { useContext } from "react";
import { Contexto } from "./context/ProviderContex";

function NavBar() {
  const { slideNV, setSlideNV } = useContext(Contexto);

  const handleClik = (a) => {
    setSlideNV(a);
  };
  return (
    <nav className="nav-bar">
      <div className={`selected ${slideNV}`}></div>

      <ul className="nav-ul">
        <li className="ul-li">
          <NavLink
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
            onClick={() => handleClik("v")}
            to="/"
          >
            Vender
          </NavLink>
        </li>
        <li className="ul-li">
          <NavLink
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
            onClick={() => handleClik("r")}
            to="/registro"
          >
            Registro
          </NavLink>
        </li>
        <li className="ul-li">
          <NavLink
            className={`link ${({ isActive }) => (isActive ? "active" : "")}`}
            onClick={() => handleClik("p")}
            to="/productos"
          >
            Productos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
