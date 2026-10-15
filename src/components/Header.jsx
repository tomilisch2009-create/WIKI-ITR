import { Link } from "react-router-dom";
import BarraBotones from "./BarraBotones.jsx";
import logo from "../assets/logo.png";
import lupa from "../assets/lupa.png";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="header-logo-bg">
          <img src={logo} alt="ITR Wiki" className="header-logo-img" />
        </Link>

        <div className="buscador">
          <img src={lupa} alt="" className="buscador-lupa" />
          <input type="text" placeholder="Buscar..." />
        </div>

        <nav className="header-links">
          <Link to="/acceder">Acceder</Link>
          <Link to="/crear-cuenta">Crear Cuenta</Link>
        </nav>
      </div>

      <BarraBotones />
    </header>
  );
}

export default Header;