import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import Nike from "../images/Nike.png";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header-container">
      {" "}
      <div className="menu" onClick={toogleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <Link to="/" className="logo-link">
        <div className="logo">
          <img src={Nike} alt="Nike" width="150" />
        </div>
      </Link>
      <nav className="nav-links">
        {" "}
        {/* Agrega una lista de navegación */}
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/agregarproducto">ADD PRODUCTS</Link>
          </li>
        </ul>
      </nav>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
