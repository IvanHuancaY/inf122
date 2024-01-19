import React from "react";



function Boton({ texto, esBotonClick, funcionClick}){
    return(
        <div>
            <button className={esBotonClick ? "boton-click" : "boton-reiniciar"}
        onClick={funcionClick}> 
            {texto}
                
            </button>
        </div>
    )
}

export default Boton;
