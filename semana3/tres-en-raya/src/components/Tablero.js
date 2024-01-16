import { click } from '@testing-library/user-event/dist/click';
import Cuadro from '../components/Cuadro';
import '../style/Tablero.css'
import { useState } from 'react';

function Tablero({ cuadros, onClick}) {


    function renderizarCuadro(i){
        return(
            <Cuadro
            valor={cuadros[i]}
            funcion={() => onClick(i)} 
            />
        );
    }
    
 /*   
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O"); 
    const click = (i) => {
        console.log(i);
        console.log(jugador);
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        console.log(cuadrosTemp);

        setJugador(jugador==="X"? "O": "X");
    }
*/


    return(
        
        <div className='tablero'>
            {renderizarCuadro(0)}
            {renderizarCuadro(1)}
            {renderizarCuadro(2)}
            {renderizarCuadro(3)}
            {renderizarCuadro(4)}
            {renderizarCuadro(5)}
            {renderizarCuadro(6)}
            {renderizarCuadro(7)}
            {renderizarCuadro(8)}
    
        </div>
    );
}

export default Tablero;