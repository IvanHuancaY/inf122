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
}