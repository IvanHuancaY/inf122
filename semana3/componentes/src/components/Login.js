import React from "react";
import "../style/Login.css";
import Boton from "./Boton";

function Login () {
    const click =(x)=>{
        console.log(x);
      };
return(
    <div className="cont-princ">
       <div className="cont-sec">
        <form>
            <label className="eti">Usuarios</label>
                <input placeholder="Ingresar Usuario"></input>
            
            <label className="eti">Contraseña:</label>
                <input placeholder="Ingresar contraseña"></input>
            <div className="butt">
                <Boton funClick={() =>click("Login")} text="Login" />
                <Boton funClick={() =>click("Ingresar")} text="Ingresar" />
            </div>
        </form>

       </div>
    </div>
)
}

export default Login;