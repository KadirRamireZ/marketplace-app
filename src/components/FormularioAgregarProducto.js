import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../context/DataProvider";

export const AgregarProductoForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const value = useContext(DataContext);
  const addProducto = value.addProducto;

  const onSubmit = (data) => {
    const nuevoProducto = {
      id: Date.now(),
      title: data.nombre,
      price: parseFloat(data.precio),
      image: data.imagen,
    };

    addProducto(nuevoProducto);
    reset();
  };

  return (
    <div className="agregar-producto-form">
      <br></br> <br></br>
      <h2>Nuevo Producto</h2>
      <br></br> <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre del Producto</label>
        <br></br>
        <input {...register("nombre", { required: true })} />
        <br></br>
        <br></br>
        <label>Precio</label>
        <br></br>
        <input
          {...register("precio", { required: true, pattern: /^[0-9.]+$/ })}
        />
        <br></br>
        <br></br>
        <label>Imagen URL</label>
        <br></br>
        <input {...register("imagen", { required: true })} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="submit">Agregar Producto</button>
        <br></br> <br></br> <br></br>
      </form>
    </div>
  );
};
