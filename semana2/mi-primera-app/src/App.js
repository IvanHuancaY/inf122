import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js';
import EventoB from './components/EventoB.js';

function App() {
  return (
    <div className="App">
    <Evento />
    <EventoB title="Py Pizza 03 - Py Puzzle" 
    image="images"
    dateLiteral="09 de Diciembre de 2023 - 13:30 Gmt-4"
    description="Hola Pythonista Participa en este Evento Presencial de la comunidad Python ¿ Cuanto conoces de Python?
    Aprende a trabajar en equipo resolviendo increibles acertijos
    Animate a ser"
    />
    <EventoB />
    </div>
  );
}

export default App;
