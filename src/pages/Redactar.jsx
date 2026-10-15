function Redactar() {
  return (
    <div className="pagina-extra">
      <div className="banner-subnav">
        <span>REDACTA UNA NOTA</span>
      </div>

      <div className="pagina-extra-centro">
        <div className="form-card form-card-grande">
          <div className="titulo-banner-yellow">
            <h1>NUEVA NOTA</h1>
          </div>

          <div className="campo">
            <label>Título</label>
            <input type="text" placeholder="Ej: Física - Cinemática" />
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
              <label>Materia</label>
              <input type="text" placeholder="Ej: Algoritmos" />
            </div>
          </div>

          <div className="campo">
            <label>Contenido</label>
            <textarea rows="10" placeholder="Escribí acá tu nota..."></textarea>
          </div>

          <div className="botones-fila">
            <button className="btn-amarillo">Publicar nota</button>
            <button className="btn-gris">Guardar borrador</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Redactar;
