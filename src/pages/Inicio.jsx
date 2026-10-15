import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="inicio-container">
      <div 
        className="division-hitbox hitbox-p"
        onClick={() => navigate("/apuntes")}
      >
        <div className="division-visual visual-p">
          <h2>DIVISIÓN: P</h2>
        </div>
      </div>

      <div 
        className="division-hitbox hitbox-m"
        onClick={() => navigate("/apuntes")}
      >
        <div className="division-visual visual-m">
          <h2>DIVISIÓN: M</h2>
        </div>
      </div>

      <div 
        className="circulo-hitbox"
        onClick={() => navigate("/apuntes")}
      >
        <button className="circulo-explorar">
          EXPLORAR TODOS LOS APUNTES
        </button>
      </div>
    </div>
  );
}

export default Inicio;