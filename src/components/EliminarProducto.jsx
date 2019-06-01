import React, { Component } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../actions/productosActions";
import { Link } from "react-router-dom";



class EliminarProducto extends Component {
  state = { id: '' };

  changeInput = e => {
    console.log("Probar eliminar datos " + e.target.value);
    this.setState({ id: e.target.value });
  };
  
  actualizarProductos = () => {
    //actualizar los producto
    console.log("productos actualizados");
    this.props.eliminarProducto(this.state).then(()=>{
      this.props.history.goBack();
    })    
  };

  render() {
    return (
      <div className="container">
        <h2>Agregar Producto</h2>
        <div>
        <form onSubmit={this.actualizarProductos}>
          <label>
            Producto Id:
            <input type="text" name="id" onChange={this.changeInput} />
          </label>
          &nbsp; 
            
          <button type="submit" className="btn btn-danger">Eliminar </button>
         
        </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { eliminarProducto }
)(EliminarProducto);
