import React, { Component } from "react";
import { connect } from "react-redux";
import { mostrarProductos } from "../actions/productosActions";
import Producto from "./Producto";
import { Link } from "react-router-dom";

class Productos extends Component {
  componentDidMount() {
    this.props.mostrarProductos();
  }

  
  render() {
    const { productos } = this.props;
    return (
      <div className="container" >
               
        <h2  class = "alert-heading" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>LISTADO DE PRODUCTOS</h2>
        {productos.map((producto, index) => {
          return <Producto key={index} producto={producto} />;
        })}
        
        <Link to={"/productos/nuevo"} className="btn btn-success">
          <button>Agregar</button>
        </Link>
        &nbsp;   
              
        <Link to={"/productos/eliminar"} className="btn btn-danger">
          <button>Eliminar</button>
        </Link>

        &nbsp;   
              
        <Link to={"/productos/buscar"} className="btn btn-warning">
          <button>Buscar</button>
        </Link>

        &nbsp;   
              
        <Link to={"/productos/modificar"} className="btn btn-info">
          <button>Modificar</button>
        </Link>
        
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    productos: state.productos.productos
  };
};

export default connect(
  mapStateToProp,
  { mostrarProductos }
)(Productos);
