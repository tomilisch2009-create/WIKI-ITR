import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Apuntes from "./pages/Apuntes.jsx";
import Apunte from "./pages/Apunte.jsx";
import Redactar from "./pages/Redactar.jsx";
import Subir from "./pages/Subir.jsx";
import Contribuir from "./pages/Contribuir.jsx";
import Acceder from "./pages/Acceder.jsx";
import CrearCuenta from "./pages/CrearCuenta.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/apuntes" element={<Apuntes />} />
          <Route path="/apunte" element={<Apunte />} />
          <Route path="/redactar" element={<Redactar />} />
          <Route path="/subir" element={<Subir />} />
          <Route path="/contribuir" element={<Contribuir />} />
          <Route path="/acceder" element={<Acceder />} />
          <Route path="/crear-cuenta" element={<CrearCuenta />} />
        </Routes>
      </main>

      <footer className="pie">
        <p>
          Bienvenido a la comunidad de ITR Wiki. Un proyecto creado por y para
          estudiantes donde tu conocimiento ayuda a otros.
        </p>
        <p>
          Sube tus aportes y encuentra los materiales de estudio que necesitas,
          sin importar en qué año estés.
        </p>
      </footer>
    </div>
  );
}

export default App;
