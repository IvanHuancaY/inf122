import React from 'react';
import "../App.css"

function Boton({funcionClick, text}){

    return (
        <button className="esBotonClick" 
        onClick={funcionClick}> 
            {texto}
        </button>
    )
}

export default Boton;