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
      <h1 className="footer">NEW COLLECTION</h1>
      <br></br>
      <img
        className="nikebarra"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/def22197634807.5ec9d1a8bb14f.gif"
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
