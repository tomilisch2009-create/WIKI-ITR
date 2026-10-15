import { useNavigate } from "react-router-dom";

function Apuntes() {
  const navigate = useNavigate();

  return (
    <div className="apuntes-page">
      <div className="banner-subnav">
        <span>APUNTES Y NOTAS: P/M TODOS LOS APUNTES Y NOTAS</span>
      </div>

      <div className="apuntes-layout">
        <div className="columna-secundaria">
          <div className="card-secundaria" onClick={() => navigate("/apunte")}>
            <span className="label-destacado-sec">Otros Destacados:</span>
            <p className="texto-destacado-sec">TEXTO</p>
          </div>

          <div className="card-secundaria" onClick={() => navigate("/apunte")}>
            <span className="label-destacado-sec">Otros Destacados:</span>
            <p className="texto-destacado-sec">TEXTO</p>
          </div>

          <div className="card-secundaria" onClick={() => navigate("/apunte")}>
            <span className="label-destacado-sec">Otros Destacados:</span>
            <p className="texto-destacado-sec">TEXTO</p>
          </div>
        </div>

        <div className="columna-principal">
          <div className="card-principal" onClick={() => navigate("/apunte")}>
            <h2>
              <span className="label-destacado-pri">Destacado De La Semana:</span>{" "}
              Algoritmos Y Estructuras De Datos
            </h2>
            <p className="descripcion-principal">
              ¿Los Punteros, Las Listas Enlazadas Y Los Árboles Binarios Te
              Están Volviendo Loco? Este Apunte Es El Salvavidas Definitivo Para
              Superar La Materia Sin Estrés. Contiene Explicaciones Claras Y Sin
              Rodeos, Esquemas Visuales, Ejemplos De Código Comentados Línea Por
              Línea Y La Resolución De Los Ejercicios Más Tramposos De Los
              Últimos Tres Finales. Subido Por Un Estudiante Que Promocionó La
              Materia Y Con Un 98% De Votos Positivos De La Comunidad. ¡Ideal
              Para Repasar La Noche Antes Del Examen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apuntes;