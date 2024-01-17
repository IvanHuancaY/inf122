import './App.css';
import Contador from './components/Contador.js';
import Boton from './components/Boton.js';
import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumCliks] = useState(0);
  const click= () => {
  setNumCliks(nroClicks + 1);
  console.log("click");
}

const clickMas3= () => {
  setNumCliks(nroClicks + 3);
  console.log("click");
}

const clickMenos3= () => {
  setNumCliks(nroClicks - 3);
  console.log("click");
}

const clickMas1= () => {
  setNumCliks(nroClicks + 1);
  console.log("click");
}

const clickMenos1= () => {
  setNumCliks(nroClicks - 1);
  console.log("click");
}
const reiniciar = () =>{
  setNumCliks(0);
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks} />
        <div className='contenedor-botones'>
          <Boton texto="+3" esBotonClick={true}
          funcionClick={clickMas3} />
          <Boton texto="-3" esBotonClick={true}
          funcionClick={clickMenos3} />
          <Boton texto="+1" esBotonClick={true}
          funcionClick={clickMas1} />
          <Boton texto="-1" esBotonClick={true}
          funcionClick={clickMenos1} />
          <Boton texto="Reiniciar" esBotonClick={false}
          funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;
