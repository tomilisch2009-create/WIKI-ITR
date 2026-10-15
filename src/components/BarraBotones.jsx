import { useNavigate } from "react-router-dom";

function BarraBotones() {
  const navigate = useNavigate();

  return (
    <div className="barra-botones">
      <button onClick={() => navigate("/redactar")}>Redacta Una Nota</button>
      <button onClick={() => navigate("/subir")}>Sube Tus Apuntes</button>
      <button onClick={() => navigate("/contribuir")}>
        Contribuí A Los Demás
      </button>
    </div>
  );
}

export default BarraBotones;
