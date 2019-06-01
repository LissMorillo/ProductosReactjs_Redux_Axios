import React, { Component } from "react";
import { connect } from "react-redux";
import { guardarProducto } from "../actions/productosActions";


class NuevoProducto extends Component {
  state = { nombre: "", precio: 0 };

  changeInput = e => {
    console.log(e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };
  guardarCambios = () => {
    //Guardar el producto
    console.log("guardando el producto");
    this.props.guardarProducto(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>Agregar Producto</h2>
        <div>
          <label htmlFor="" >Nombre: </label>
          &nbsp;             
          <input onChange={this.changeInput} name="nombre" type="text" />
        </div>
        <div>
          <label htmlFor="" style={{ width: '12vh'}}>Precio: </label>
          &nbsp;           
          <input onChange={this.changeInput} name="precio" type="text" />
        </div>
        <div>
          <button onClick={this.guardarCambios} className="btn btn-success"  style={{ width: '28vh'}}>
           Agregar
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { guardarProducto }
)(NuevoProducto);
