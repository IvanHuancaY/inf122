import React from "react";
import "../style/NotaBasic.css";


function NotaBasic({nota, onDelete, onEdit}) {
    return (
        <div  >
            <p className="notas">{nota} hola</p>
            <div>
                <button className="boton" onClick={onEdit}>Editar</button>
                <button className="boton" onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default NotaBasic;