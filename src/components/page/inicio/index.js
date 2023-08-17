import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="inicio">
      {/* <Link to="/">
        <h1>home</h1>
      </Link> */}
      <Link to="/productos">
        <h1>Productos</h1>
      </Link>
      <img
        src={
          "https://assets.designhill.com/design-blog/wp-content/uploads/2016/04/6-min.jpg"
        }
        alt=""
      />
      <h1> - Bienvenidos a Nike Store - </h1>
      <img src={"https://turbologo.com/articles/wp-content/uploads/2019/02/nike-4.png"}></img>

    </div>
  );
}
