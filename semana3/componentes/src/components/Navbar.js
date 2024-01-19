import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar(){

    return(
        <Outlet>
        <nav>
            <ul>
                <li>
                    <Link to="/" >Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/registro">Registro</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
            </ul>
        </nav>
        </Outlet>
    );
}

export default NavBar;