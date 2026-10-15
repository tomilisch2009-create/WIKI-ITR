function Subir() {
  return (
    <div className="pagina-extra">
      <div className="banner-subnav">
        <span>SUBE TUS APUNTES</span>
      </div>

      <div className="pagina-extra-centro">
        <div className="form-card form-card-grande">
          <div className="titulo-banner-yellow">
            <h1>SUBIR APUNTE</h1>
          </div>

          <div className="campo">
            <label>Título</label>
            <input
              type="text"
              placeholder="Ej: Análisis Matemático - Límites"
            />
          </div>

          <div className="campos-fila">
            <div className="campo">
              <label>División</label>
              <select>
                <option>División P</option>
                <option>División M</option>
              </select>
            </div>

            <div className="campo">
              <label>Año</label>
              <select>
                <option>1° año</option>
                <option>2° año</option>
                <option>3° año</option>
                <option>4° año</option>
                <option>5° año</option>
                <option>6° año</option>
              </select>
            </div>
          </div>

          <div className="zona-archivo">
            <span className="zona-archivo-icono">📄</span>
            <p>Arrastrá tu archivo acá</p>
            <p className="texto-ayuda">PDF, Word o imagen (máx. 10 MB)</p>
            <button className="btn-amarillo">Elegir archivo</button>
          </div>

          <div className="campo">
            <label>Descripción</label>
            <textarea
              rows="4"
              placeholder="Contá de qué trata el apunte..."
            ></textarea>
          </div>

          <div className="botones-fila">
            <button className="btn-amarillo">Subir apunte</button>
            <button className="btn-gris">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subir;
