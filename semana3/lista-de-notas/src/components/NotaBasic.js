import React from "react";

function NotaBasic({nota, onDelete, onEdit}) {
    return (
        <div>
            <p className="notas">{nota}</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={onDelete}>Eliminar</button>
            </div>
        </div>
    )
}

export default NotaBasic;