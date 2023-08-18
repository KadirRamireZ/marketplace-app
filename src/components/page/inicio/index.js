import React from "react";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="inicio">
      {/* <Link to="/">
        <h1>home</h1>
      </Link> */}
      <Link to="/productos">
        <h1>Products</h1>
      </Link>
      <img
        src={
          "https://images.squarespace-cdn.com/content/v1/5e62cbf3daf9e45668fae6f0/1586199684548-T1XPYLITQ9EXU7RNV75J/BannerAnimation3.gif?format=2500w"
        }
        alt=""
      />
      <h1> www.nikestore.com </h1>
      <img
        src={
          "https://turbologo.com/articles/wp-content/uploads/2019/02/nike-4.png"
        }
      ></img>
    </div>
  );
}
