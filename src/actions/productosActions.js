import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, BUSCAR_PRODUCTO, MODIFICAR_PRODUCTO,
MOSTRAR_PRODUCTO, EDITAR_PRODUCTO } from "./types";
import axios from "axios";

/*export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get(
    "https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos");
    http://localhost:5000/productos
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};*/


export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get(
    "https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos");
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};

export const modificarProducto = producto => async dispatch => {
  
  const respuesta = await axios.put(
    "https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos/"+producto.producto.id, producto.producto
  );

  dispatch({
    type: MODIFICAR_PRODUCTO,
    payload: respuesta.data
  });
 };


export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos",
    producto
  );
  console.log(respuesta);

  dispatch({
    type: GUARDAR_PRODUCTO,
    payload: respuesta.data
  });
 };

export const eliminarProducto = id => async dispatch => {
  const respuesta = await axios.delete(
    `https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos/${id.id}`
  );
  console.log("producto eliminado" + respuesta);

  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};

export const buscarProducto = id => async dispatch => {

  const respuesta = await axios.get(
    `https://my-json-server.typicode.com/LissMorillo/productosbootcampdb/productos/${id}`
  );

  dispatch({
    type: BUSCAR_PRODUCTO,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};





