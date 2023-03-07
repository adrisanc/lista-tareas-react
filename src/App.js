import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";
import logoFreeCodeCamp from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logoFreeCodeCamp}
          className="frecodecamp-logo"
          alt="Logo freeCodeCamp"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
