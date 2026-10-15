import { Link } from "react-router-dom";

function CrearCuenta() {
  return (
    <div className="pagina-extra">
      <div className="banner-subnav">
        <span>CREAR CUENTA</span>
      </div>

      <div className="pagina-extra-centro">
        <div className="form-card form-card-chica">
          <div className="titulo-banner-yellow">
            <h1>NUEVA CUENTA</h1>
          </div>

          <div className="campo">
            <label>Nombre completo</label>
            <input type="text" defaultValue="Alumno de Ejemplo" />
          </div>

          <div className="campo">
            <label>Usuario</label>
            <input type="text" defaultValue="alumno_itr" />
          </div>

          <div className="campo">
            <label>Email</label>
            <input type="email" defaultValue="alumno@ejemplo.com" />
          </div>

          <div className="campos-fila">
            <div className="campo">
              <label>División</label>
              <select defaultValue="P">
                <option value="P">División P</option>
                <option value="M">División M</option>
              </select>
            </div>

            <div className="campo">
              <label>Año</label>
              <select defaultValue="5">
                <option value="1">1° año</option>
                <option value="2">2° año</option>
                <option value="3">3° año</option>
                <option value="4">4° año</option>
                <option value="5">5° año</option>
                <option value="6">6° año</option>
              </select>
            </div>
          </div>

          <div className="campo">
            <label>Contraseña</label>
            <input type="password" defaultValue="contraseña123" />
          </div>

          <div className="campo">
            <label>Repetir contraseña</label>
            <input type="password" defaultValue="contraseña123" />
          </div>

          <button className="btn-amarillo btn-ancho">Crear cuenta</button>

          <p className="texto-ayuda">
            ¿Ya tenés cuenta?{" "}
            <Link to="/acceder" className="enlace-form">
              Acceder
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CrearCuenta;
