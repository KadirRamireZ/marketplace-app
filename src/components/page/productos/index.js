import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  return (
    <>
      <img
        className="nikebarra"
        src="https://d1qg2exw9ypjcp.cloudfront.net/assets/prod/127006/p1d2d0mqn35p21s441bs41oa7ifd4.gif"
      />
      <h1 className="produ">NEW OFFERS</h1>
      <br></br>
      <img
        className="nikebarra"
        src="https://www.sportline.com.co/media/wysiwyg/BANNER-LANDING-DESKTOP-PADRES-PROMO-2.gif"
      />
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            price={producto.price}
            id={producto.id}
          />
        ))}
      </div>
    </>
  );
};
