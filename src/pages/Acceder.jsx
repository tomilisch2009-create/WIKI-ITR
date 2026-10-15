import { Link } from "react-router-dom";

function Acceder() {
  return (
    <div className="pagina-extra">
      <div className="banner-subnav">
        <span>ACCEDER</span>
      </div>

      <div className="pagina-extra-centro">
        <div className="form-card form-card-chica">
          <div className="titulo-banner-yellow">
            <h1>INICIAR SESIÓN</h1>
          </div>

          <div className="campo">
            <label>Usuario</label>
            <input type="text" defaultValue="alumno_itr" />
          </div>

          <div className="campo">
            <label>Contraseña</label>
            <input type="password" defaultValue="contraseña123" />
          </div>

          <label className="check-recordar">
            <input type="checkbox" defaultChecked /> Recordarme en este equipo
          </label>

          <button className="btn-amarillo btn-ancho">Entrar</button>

          <p className="texto-ayuda">¿Olvidaste tu contraseña?</p>

          <p className="texto-ayuda">
            ¿No tenés cuenta?{" "}
            <Link to="/crear-cuenta" className="enlace-form">
              Crear cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acceder;
