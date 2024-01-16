import React from "react";
import Tablero from "./Tablero";
import { useState } from "react";

function Juego() {
    const [cuadros, setCuadros] = useState(Array(9.fill(null)));
    const [jugador, setJugador] = useState("X");
    const click = (i) => {
        console.log("pos:" + i);
        console.log("turno:" + jugador);
        const cuadrosTemp = [...cuadros];
        
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i] = jugador;
            console.log("array",cuadrosTemp);
            setCuadros(cuadrosTemp)
            setJugador(jugador==="X"? "O": "X");
        }
    }
}

export default Juego;