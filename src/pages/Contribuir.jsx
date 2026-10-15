function Contribuir() {
  return (
    <div className="pagina-extra">
      <div className="banner-subnav">
        <span>CONTRIBUÍ A LOS DEMÁS</span>
      </div>

      <div className="pagina-extra-centro">
        <div className="contribuir-contenedor">
          <div className="titulo-banner-yellow">
            <h1>¿CÓMO PODÉS AYUDAR?</h1>
          </div>

          <div className="contribuir-grilla">
            <div className="card-contribuir">
              <h3>⭐ Dejá una reseña</h3>
              <p>
                Contanos qué te pareció un apunte y ayudá a otros a elegir el
                mejor.
              </p>
              <button className="btn-amarillo">Ver apuntes</button>
            </div>

            <div className="card-contribuir">
              <h3>✏️ Corregí un apunte</h3>
              <p>
                ¿Encontraste un error? Proponé una corrección a la comunidad.
              </p>
              <button className="btn-amarillo">Proponer cambio</button>
            </div>

            <div className="card-contribuir">
              <h3>📝 Sumá ejercicios</h3>
              <p>Agregá ejercicios resueltos de parciales y finales.</p>
              <button className="btn-amarillo">Agregar ejercicios</button>
            </div>

            <div className="card-contribuir">
              <h3>🚩 Reportá un problema</h3>
              <p>Avisanos si algo del sitio no funciona como debería.</p>
              <button className="btn-amarillo">Enviar reporte</button>
            </div>
          </div>

          <div className="ayuda-lista">
            <h2>Apuntes que necesitan ayuda</h2>

            <div className="fila-ayuda">
              <span>Electrónica Analógica - Diodos y transistores</span>
              <span className="etiqueta-ayuda">Falta revisión</span>
            </div>
            <div className="fila-ayuda">
              <span>Análisis Matemático - Límites y derivadas</span>
              <span className="etiqueta-ayuda">Faltan ejercicios</span>
            </div>
            <div className="fila-ayuda">
              <span>Programación Web - HTML y CSS desde cero</span>
              <span className="etiqueta-ayuda">Sin reseñas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribuir;
