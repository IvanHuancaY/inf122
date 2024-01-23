import React, { useState } from "react";
import NotaBasic from "./NotaBasic";
import '../style/ListaNotas.css';

function ListaNotasBasic() {
    const [notas, setNotas] = useState([])
    const addNota = () => {
        console.log("Agregar Nota");
    };

    const onDelete = () => {
        console.log("eliminar");
    };
    const onEdit = () => {
        console.log("Editar")
    };
}; 

return(
    <div className="contenedor-principal">
        <input
        className="input"
        type="text"
        value={texto}
        onChange={ (e) => setTexto(e.target.value)}
         />
         <button className="boton" onClick={addNota}
         {nota.map((nota)=>(
            <NotaBasic
                nota={nota}
                onDelete={onDelete}
                onEdit={onEdit}
            />
         ))}


          />
    </div>
)