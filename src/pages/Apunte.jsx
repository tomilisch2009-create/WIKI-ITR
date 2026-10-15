function Apunte() {
  return (
    <div className="apunte-page">
      <div className="apunte-container">
        <div className="apunte-card-main">
          <div className="apunte-contenido">
            <div className="titulo-banner-yellow">
              <h1>TITULO CUALQUIERA</h1>
            </div>

            <h2 className="materia-subtitulo">
              Algoritmos Y Estructuras De Datos - La Guía De Supervivencia Definitiva
            </h2>

            <p className="intro-texto">
              ¿Los Punteros, La Recursividad Y Los Árboles Binarios Te Están Haciendo Dudar De Tu Elección De Carrera? Esta Materia Suele Ser El Primer Gran Filtro Académico, Pero Este Apunte Colaborativo Se Ha Convertido En El Salvavidas Definitivo De La Comunidad Para Superarla (Y Promocionarla) Sin Estrés.
            </p>

            <p className="subseccion-titulo">
              Por Qué Este Apunte Es El Más Valorado Del Cuatrimestre:
            </p>

            <ul className="puntos-lista">
              <li>
                <strong>Teoría Al Grano:</strong> Explicaciones Claras Sobre Complejidad Algorítmica (Notación Big O) Utilizando Ejemplos Prácticos Y Cotidianos, Dejando De Lado La Jerga Matemática Excesiva.
              </li>
              <li>
                <strong>Visualización De Memoria:</strong> Olvídate De Los Frustrantes Segmentation Faults. El Documento Incluye Esquemas Visuales Paso A Paso De Cómo Se Enlazan Y Desenlazan Los Nodos En Listas, Pilas Y Colas Directamente En La Memoria Dinámica.
              </li>
              <li>
                <strong>Árboles Y Grafos Sin Misterios:</strong> Desglose Interactivo De Recorridos (BFS, DFS), Árboles Binarios De Búsqueda (BST) Y Algoritmos De Caminos Mínimos (Dijkstra) Con Analogías Visuales Que Facilitan La Memorización.
              </li>
              <li>
                <strong>Código Comentado Línea Por Línea:</strong> Ejemplos Prácticos Listos Para Copiar Y Probar, Donde Se Explica Detalladamente El "Por Qué" De Cada Decisión Lógica Y Condición De Corte, No Solo La Sintaxis.
              </li>
              <li>
                <strong>Resolución De Exámenes Finales:</strong> La Verdadera Joya De La Corona. Una Sección Dedicada Exclusivamente A Resolver Los Ejercicios Más Tramposos, Cubriendo Los "Casos Borde" De Los Parciales Y Finales De Los Últimos Tres Años Que Siempre Hacen Restar Puntos.
              </li>
            </ul>

            <div className="meta-info-box">
              <div className="autor-yellow-box">
                <p>
                  <strong>Autor Original:</strong> @DevMateo (Colaboración Comunitaria: Editado Por Última Vez Hace 4 Días Con Aportes De Otros 12 Estudiantes).
                </p>
              </div>
              <div className="resenas-grey-box">
                <p className="rating-texto">⭐ <strong>4.9/5</strong> (Basados En 342 Reseñas).</p>
                <p className="verificado-texto"><strong>Estado Del Contenido:</strong> Verificado Por La Comunidad (Revisión Técnica Aprobada).</p>
              </div>
            </div>
          </div>

          <div className="apunte-sidebar-descargas">
            <button className="btn-descarga-icn" title="Ver Apunte">
              <span className="icon-doc">📄</span>
              <span className="icon-circle-arrow">↓</span>
            </button>
            <button className="btn-descarga-icn" title="Descargar PDF">
              <span className="icon-doc">📄</span>
              <span className="icon-circle-arrow">↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apunte;