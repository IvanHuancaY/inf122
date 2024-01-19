import React from "react";
import Boton from "./Boton";
import '../style/Registro.css';

function Registro () {
    const click =(x)=> {
        console.log(x);
      };
    return(
        <div className="cont-sec">
        <label className="eti">Nombre</label>
        <input placeholder="Ingrear Usuario"></input>
        <label className="eti">Apellido</label>
        <input placeholder="Ingrear Usuario"></input>
        <label className="eti">Contraseña</label>
        <input type="password" placeholder="Ingresar contraseña"></input>

        <Boton funClick={() =>click("Login")} text="Login" />   

        </div>
    );
}

export default Registro;