import React from "react";
import logo from "./images/Burger-King-Logo-CMS.png"

const Header = () => {

    return (
        <div className="container">
            <ul className="nav d-flex align-items-center" >
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="Burger King"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Pedi tu Combo Favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Menú</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Cupones</a>
                </li>
        </ul>
        </div>
    );
}

export default Header;